using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using System.IO;
using System.Threading;
using System.Threading.Tasks;

namespace DomainModel
{
    public interface IAscotJobTrackerAsync
    {
        public Task<CustomersOrJobs> CustomersAndJobsByText(string query);

        public Task<Customer> GetCustomer(int id);
        public Task<Customer> CreateCustomer(Customer customer);
        public Task<Customer> PutCustomer(int id, Customer customer);
        public Task<(bool, JobId[])> ArchiveCustomer(int customerId);
        

        public Task<Job> GetJob(JobId id);
        public Task<Job> CreateJob(int customerId, Job job);
        public Task<bool> RejectJob(JobId id);
        

        public Task<Job> PutJobNettOrDiscount(JobId jobId, NettOrDiscount nettOrDiscount);
        public Task<Job> PutJobDocuments(JobId jobId, Document[] documents);
        public Task<Job> PutJobApproval(JobId jobId, JobApproval approval);
        public Task<Job> PutJobCreditCheck(JobId jobId, string creditCheckNumber);
        public Task<Job> PutJobSiteContact(JobId jobId, Contact siteContact);
        public Task<Job> PutJobQSContact(JobId jobId, Contact qsContact);
        
        
        public Task<LineItem> PutDoor(JobId jobId, Door door);
        public Task<LineItem> PutDoorVariation(JobId jobId, Door door);
        public Task<LineItem> PutNonDoorVariation(JobId jobId, NonDoorVariation nonDoorVariation);
        public Task<LineItem[]> DeleteJobLine(JobId jobId, int lineNumber);

        public Task<List<Job>> GetByStatus(JobStage[] jobStages, DoorStage[] doorStages);

        public Task<ApplicationForPayment[]> ApplicationForPayments(JobId jobId);
        public Task<ApplicationForPayment> CreateApplicationForPayment(JobId jobId);

        public Task<LineItem> PostLineItemStageComplete(JobId jobId, int lineNumber);

        public Task<LineItem> PostLineItemCancelled(JobId jobId, int lineNumber);
    }

    public class CustomersOrJobs
    {
        public Customer[] Customers { get; set; }
        public JobSummary[] Jobs { get; set; }
        public bool HasOneJob => Jobs?.Length==1;
    }
}
