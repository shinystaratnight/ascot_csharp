using DomainModel;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Infrastructure;


namespace AscotJobs.Controllers
{
    [ApiController,Route("api/[controller]")]
    public class JobsController : ControllerBase
    {
        readonly IAscotJobTrackerAsync ascotJobTrackerAsync;
        readonly IWebHostEnvironment hostingEnvironment;
        public JobsController(IAscotJobTrackerAsync ascotJobTrackerAsync, IWebHostEnvironment hostingEnv)
        {
            this.ascotJobTrackerAsync = ascotJobTrackerAsync;
            hostingEnvironment = hostingEnv;
        }

        
        [HttpGet,HttpGet("search/{query}")]
        public async Task<IStatusCodeActionResult> CustomersAndJobsByText(string query)
        {
            var searchResult = await ascotJobTrackerAsync.CustomersAndJobsByText(query??"");
            return Ok( searchResult);
        }

        [HttpGet("customer/{customerId}")]
        public async Task<IStatusCodeActionResult> GetCustomer(int customerId)
        {
            var customer = await ascotJobTrackerAsync.GetCustomer(customerId);
            return customer != null ? Ok(customer) : NotFound();
        }

        [HttpPost("customer")]
        public async Task<IStatusCodeActionResult> CreateCustomer([FromBody] Customer newCustomer)
        {
            var customer = await ascotJobTrackerAsync.CreateCustomer(newCustomer);
            return Created(HttpContext.Request.Scheme + "://" + HttpContext.Request.Host + HttpContext.Request.Path + "/" + customer.Id,
                customer);
        }

        [HttpPut("customer/{customerId}")]
        public async Task<IStatusCodeActionResult> PutCustomer(int customerId, [FromBody] Customer newCustomer)
        {
            await ascotJobTrackerAsync.PutCustomer(customerId, newCustomer);
            return Created(HttpContext.Request.Scheme + "://" + HttpContext.Request.Host + HttpContext.Request.Path + "/" + customerId,
                newCustomer);
        }
        

        [HttpGet("{id}")]
        public async Task<IStatusCodeActionResult> GetJob(string id)
        {
            var job = await ascotJobTrackerAsync.GetJob(new JobId { Value = id });
            return job != null ? Ok(job) : NotFound();
        }

        [HttpPut("{customerId}")]
        [HttpPost("{customerId}")]
        public async Task<IStatusCodeActionResult> CreateJob(int customerId, [FromBody] Job job)
        {
            var customer = await ascotJobTrackerAsync.GetCustomer(customerId);
            if (customer != null)
            {
                job.Customer = customer;
                await ascotJobTrackerAsync.CreateJob(customerId, job);

                return Created(HttpContext.Request.Scheme + "://" + HttpContext.Request.Host + HttpContext.Request.Path + "/" + job.Id.Value,
                        job);
            }

            return NotFound();
        }

        [HttpPost("documents/{jobId}")]
        public async Task<IStatusCodeActionResult> UploadDocuments(string jobId)
        {
            try
            {
                var files = HttpContext.Request.Form.Files;
                if (files.Count > 0)
                {
                    var documents = new List<Document>();
                    
                    foreach (var file in files)
                    {
                        FileInfo fi = new FileInfo(file.FileName);
                        var newFileName = "Documents_" + DateTime.Now.TimeOfDay.Milliseconds + fi.Extension;
                        var path = Path.Combine("", hostingEnvironment.ContentRootPath + "\\Documents\\" + newFileName);

                        using (var stream = new FileStream(path, FileMode.Create))
                        {
                            file.CopyTo(stream);
                        }
                        Document document = new Document();
                        document.JobId = jobId;
                        document.Name = newFileName;
                        document.Path = path;

                        documents.Add(document);
                    }
                    var job = ascotJobTrackerAsync.PutJobDocuments(new JobId { Value = jobId }, documents.ToArray());
                    return Created(HttpContext.Request.Scheme + "://" + HttpContext.Request.Host + HttpContext.Request.Path + "/" + jobId,
                        job);
                }
                else {
                    return BadRequest();
                }
            }
            catch (Exception e) {
                return BadRequest();
            }
        }

        [HttpPut("door/{jobId}")]
        [HttpPost("door/{jobId}")]
        public async Task<IStatusCodeActionResult> PutDoor(string jobId, [FromBody] Door door)
        {
            var job = await ascotJobTrackerAsync.GetJob(new JobId { Value = jobId });
            if (job != null)
            {
                await ascotJobTrackerAsync.PutDoor(new JobId { Value = jobId }, door);
                return Created(HttpContext.Request.Scheme + "://" + HttpContext.Request.Host + HttpContext.Request.Path + "/" + job.Id.Value,
                        job);
            }
            return NotFound();
        }

        [HttpPut("{jobId}/net-or-discount")]
        [HttpPost("{jobId}/net-or-discount")]
        public async Task<IStatusCodeActionResult> PutJobNettOrDiscount(string jobId, [FromBody] NettOrDiscount nettOrDiscount)
        {

            var job = await ascotJobTrackerAsync.PutJobNettOrDiscount(new JobId { Value = jobId }, nettOrDiscount);
            if (job != null) {
                return Created(HttpContext.Request.Scheme + "://" + HttpContext.Request.Host + HttpContext.Request.Path + "/" + jobId,
                    job);
            }
            return NotFound();
        }

        [HttpPut("door/{jobId}/variation")]
        [HttpPost("door/{jobId}/variation")]
        public async Task<IStatusCodeActionResult> PutDoorVariation(string jobId, [FromBody] Door door)
        {
            var job = await ascotJobTrackerAsync.GetJob(new JobId { Value = jobId });
            if (job != null)
            {
                await ascotJobTrackerAsync.PutDoorVariation(new JobId { Value = jobId }, door);
                return Created(HttpContext.Request.Scheme + "://" + HttpContext.Request.Host + HttpContext.Request.Path + "/" + job.Id.Value,
                        job);
            }
            return NotFound();
        }

        [HttpPut("non-door/{jobId}")]
        [HttpPost("non-door/{jobId}")]
        public async Task<IStatusCodeActionResult> PutDoorVariation(string jobId, [FromBody] NonDoorVariation nonDoorVariation)
        {
            var job = await ascotJobTrackerAsync.GetJob(new JobId { Value = jobId });
            if (job != null)
            {
                await ascotJobTrackerAsync.PutNonDoorVariation(new JobId { Value = jobId }, nonDoorVariation);
                return Created(HttpContext.Request.Scheme + "://" + HttpContext.Request.Host + HttpContext.Request.Path + "/" + job.Id.Value,
                        job);
            }
            return NotFound();
        }

        [HttpGet("filter/{jobStage}/{doorStage}")]
        public async Task<IStatusCodeActionResult> GetByStatus(string jobStage, string doorStage)
        {
            var jobStages = new JobStage[0];
            if (jobStage.ToString() == "all") {
                jobStages = new JobStage[] { JobStage.AwaitingCreditApproval,
                    JobStage.Complete, JobStage.InProgress };
            } else {
                jobStages = new JobStage[] {
                    (JobStage) int.Parse(jobStage)
                };
            }

            var doorStages = new DoorStage[0];
            if (doorStage.ToString() == "all") {
                doorStages = new DoorStage[] {
                    DoorStage.CammingSpeccing, DoorStage.Completed, DoorStage.Delivery,
                    DoorStage.DoorCancelled, DoorStage.DrawingOffice, DoorStage.Manufacture,
                    DoorStage.Problem
                };
            } else
            {
                doorStages = new DoorStage[] {(DoorStage) int.Parse(doorStage)};
            }

            var jobs = await ascotJobTrackerAsync.GetByStatus(jobStages, doorStages);           
                       
            return Ok(jobs);
        }

        [HttpPut("{jobId}/qs-contact")]
        [HttpPost("{jobId}/qs-contact")]
        public async Task<IStatusCodeActionResult> PutJobQSContact(string jobId, [FromBody] Contact qsContact)
        {

            var job = await ascotJobTrackerAsync.PutJobQSContact(new JobId { Value = jobId }, qsContact);
            if (job != null)
            {
                return Created(HttpContext.Request.Scheme + "://" + HttpContext.Request.Host + HttpContext.Request.Path + "/" + jobId,
                    job);
            }
            return NotFound();
        }

        [HttpPut("{jobId}/site-contact")]
        [HttpPost("{jobId}/site-contact")]
        public async Task<IStatusCodeActionResult> PutJobSiteContact(string jobId, [FromBody] Contact siteContact)
        {

            var job = await ascotJobTrackerAsync.PutJobSiteContact(new JobId { Value = jobId }, siteContact);
            if (job != null)
            {
                return Created(HttpContext.Request.Scheme + "://" + HttpContext.Request.Host + HttpContext.Request.Path + "/" + jobId,
                    job);
            }
            return NotFound();
        }
        
        [HttpPut("door/complete/{jobId}/{lineNumber}")]
        public async Task<IStatusCodeActionResult> PostLineItemStageComplete(string jobId, int lineNumber) {

            var lineItem = await ascotJobTrackerAsync.PostLineItemStageComplete(new JobId { Value = jobId }, lineNumber);
            return Ok(lineItem);
        }

        [HttpPut("door/cancelled/{jobId}/{lineNumber}")]
        public async Task<IStatusCodeActionResult> PostLineItemCancelled(string jobId, int lineNumber)
        {
            var lineItem = await ascotJobTrackerAsync.PostLineItemCancelled(new JobId { Value = jobId }, lineNumber);
            return Ok(lineItem);
        }


        [HttpDelete("{jobId}")]
        public async Task<IStatusCodeActionResult> Delete(string jobId)
        {
            var job = await ascotJobTrackerAsync.GetJob(new JobId { Value = jobId });

            if (job != null) {
                await ascotJobTrackerAsync.RejectJob(new JobId { Value = jobId });
                return Ok();
            }
            return NotFound();
        }

        [HttpDelete("door/{jobId}/{lineNumber}")]
        public async Task<IStatusCodeActionResult> DeleteJobLine (string jobId, int lineNumber)
        {
            var job = await ascotJobTrackerAsync.GetJob(new JobId { Value = jobId });

            if (job != null)
            {
                var lineItems = await ascotJobTrackerAsync.DeleteJobLine(new JobId { Value = jobId }, lineNumber);
                return Ok(lineItems);
            }
            return NotFound();
        }

        [HttpPut("credit-check/{jobId}/{creditCheckNumber}")]
        public async Task<IStatusCodeActionResult> PutJobCreditCheck(string jobId, string creditCheckNumber) 
        {
            var job = await ascotJobTrackerAsync.PutJobCreditCheck(jobId, creditCheckNumber);
            if (job != null) {
                return Created(HttpContext.Request.Scheme + "://" + HttpContext.Request.Host + HttpContext.Request.Path + "/" + job.Id.Value,
                        job);
            }
            return BadRequest();
        }

        [HttpPost("afp/{jobId}")]
        public async Task<IStatusCodeActionResult> CreateApplicationForPayment(string jobId) {

            var afp = await ascotJobTrackerAsync.CreateApplicationForPayment(new JobId { Value = jobId });
            return Ok(afp);
        }
        
        [HttpGet("afp/{jobId}")]
        public async Task<IStatusCodeActionResult> GetApplicationForPayments(string jobId)
        {
            var afps = await ascotJobTrackerAsync.ApplicationForPayments(jobId);
            return afps.Length == 0 ? NotFound() : Ok(afps);
        }

    }
}
