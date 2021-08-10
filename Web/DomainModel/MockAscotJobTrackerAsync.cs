using DomainModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AscotJobs.DomainModel
{
    public class MockAscotJobTrackerAsync : IAscotJobTrackerAsync
    {
        internal const int ID100 = 100;
        internal const string Idjob1 = "100-1";

        internal static List<Customer> ArchivedCustomer = new List<Customer>();
        internal static List<Job> ArchivedJobs = new List<Job>();

        internal static List<ApplicationForPayment> ApplicationsForPayment = new List<ApplicationForPayment>();

        internal static Customer TestCustomer1 => new Customer
        {
            Id = ID100,
            Name = "Test Customer 1",
            Address = new Address
            {
                Lines = "1 Test Address",
                City = "Test City",
                Postcode = Postcode.TestCode
            }
        };

       
        internal static Job TestJob => new Job(TestCustomer1)
        {
            Id = Idjob1,
            LineItems = new[] { new LineItem(100, new Door{Colour = "Red", Height=2000, Width=800, CostPrice = 100, SellPrice = 200, CustomerDoorRef = "C1Door1"}) },
            SiteContact = "SiteContact 1",
            AreaCode = "1",
            AttendanceAgreed = new AttendanceHelp
            {
                Distribution = AttendanceHelp.ByWho.Ascot,
                Hoisting = AttendanceHelp.ByWho.Ascot,
                Offload = AttendanceHelp.ByWho.Ascot,
                Plant = AttendanceHelp.ByWho.Ascot,
            },
            SiteEmail = "site1@customer11.test",
            QSContact = "QS site 1",
            QSEmail = "qs@customer11.test",
            InstallationDateWc = DateTime.Today.AddDays(10)
        };
        
        internal static List<Customer> customers = new List<Customer>()
        {
            TestCustomer1,
            new Customer()
            {
                Id = 1,
                Name = "First Customer",
                Address = new Address{
                    Lines="1 Test Address",
                    City= "Test City",
                    Postcode= new Postcode {
                        Value= "3333 333"
                    }
                }
            },
            new Customer()
            {
                Id = 2,
                Name = "Second Customer",
                Address = new Address{
                    Lines="2 Test Address",
                    City= "Test City",
                    Postcode= new Postcode {
                        Value= "555 9999"
                    }
                }
            }
        };

        internal static List<Job> jobs = new List<Job>()
        {
            TestJob,
            new Job(customers[0])
            {
                Id = "2",
                SiteContact = "site contact",
                SiteContactPhone = new PhoneNumber("01111111111"),
                SiteAddress = new Address{
                    Lines="01 Test Address",
                    City= "Test City",
                    Postcode= new Postcode {
                        Value= "A11AA"
                    }
                },
                QSContact = "qs contact",
                QSContactPhone = "qs contact phone",
                Stage = JobStage.InProgress,
                AreaCode = "1",
                LineItems = new[]
                {
                    new LineItem(1,new Door
                    {
                        Colour = "Red",
                        Height = 1980,
                        Stage = DoorStage.DrawingOffice,
                        Type = DoorType.Type.HingedDoor,
                        Width = 810,
                        CostPrice = 300,
                        SellPrice = 400,
                        CustomerDoorRef = "C1J1D1"
                    }),
                    new LineItem(2,new Door
                    {
                        Colour = "Red",
                        Height = 1980,
                        Stage = DoorStage.DrawingOffice,
                        Type = DoorType.Type.HingedDoor,
                        Width = 810,
                        CostPrice = 300,
                        SellPrice = 400,
                        CustomerDoorRef = "C1J1D2"
                    }),
                    new LineItem(3,new Door
                    {
                        Colour = "Blue",
                        Height = 1980,
                        Stage = DoorStage.DrawingOffice,
                        Type = DoorType.Type.HingedDoorFireRated,
                        Width = 830,
                        CostPrice = 350,
                        SellPrice = 450,
                        CustomerDoorRef = "C1J1D3"
                    }),
                }
            },
            new Job(customers[0])
            {
                Id="3",
                SiteContact = "site contact 2",
                SiteContactPhone = new PhoneNumber("01111111111"),
                SiteAddress = new Address{
                    Lines="02 Test Address",
                    City= "Test City",
                    Postcode= new Postcode {
                        Value= "A12AA"
                    }
                },
                QSContact = "qs contact",
                QSContactPhone = "qs contact phone",
                Stage = JobStage.InProgress,
                AreaCode = "EX",
                LineItems = new []
                {
                    new LineItem(1,new Door
                    {
                        Colour = "Orange",
                        Height = 1980,
                        Stage = DoorStage.DrawingOffice,
                        Type = DoorType.Type.HingedDoor,
                        Width = 810,
                        CostPrice = 300,
                        SellPrice = 400,
                        CustomerDoorRef = "C1J3D1"
                    }),
                    new LineItem(2,new Door
                    {
                        Colour = "Orange",
                        Height = 1980,
                        Stage = DoorStage.DrawingOffice,
                        Type = DoorType.Type.HingedDoor,
                        Width = 810,
                        CostPrice = 300,
                        SellPrice = 400,
                        CustomerDoorRef = "C1J3D2"
                    }),
                    new LineItem(3,new Door
                    {
                        Colour = "Green",
                        Height = 1980,
                        Stage = DoorStage.DrawingOffice,
                        Type = DoorType.Type.HingedDoorFireRated,
                        Width = 830,
                        CostPrice = 350,
                        SellPrice = 450,
                        CustomerDoorRef = "C1J3D3"
                    }),   
                    new LineItem(4, new NonDoorVariation
                    {
                        Description = "Non door variation for job 3",
                        Stage = DoorStage.DrawingOffice,
                        Type = NonDoorVariation.VariantType.NonDoor,
                        CostPrice = 250,
                        InstructedBy = "Person 1",
                        InstructionDate = new DateTime(2021,6,3),
                        AscotRef = "C1J3 Var1"
                    })
                }
                
            },
            new Job(customers[1])
            {
            Id="4",
            SiteContact = "site contact 3",
            SiteContactPhone = new PhoneNumber("01111111111"),
            SiteAddress = new Address{
                Lines="03 Test Address",
                City= "Test City",
                Postcode= new Postcode {
                    Value= "A13AA"
                }
            },
            QSContact = "qs contact",
            QSContactPhone = "qs contact phone",
            AreaCode = "3",
            }
        };

        Task<ApplicationForPayment[]> IAscotJobTrackerAsync.ApplicationForPayments(JobId jobId)
        {
            return Task.FromResult(ApplicationsForPayment.Where(a => a.JobId == jobId).ToArray());
        }

        Task<(bool,JobId[])> IAscotJobTrackerAsync.ArchiveCustomer(int customerId)
        {
            var customerJobs=jobs.Where(j => j.Customer.Id == customerId);
            var openJobs = customerJobs.Where(j=>j.Stage != JobStage.Complete).Select(j=>j.Id).ToArray();
            if (openJobs.Any())
            {
                return Task.FromResult((false,openJobs));
            }
            else
            {
                var customer = customers.SingleOrDefault(c => c.Id == customerId);
                ArchivedJobs.AddRange( customerJobs);
                ArchivedCustomer.Add(customer);
                jobs.RemoveAll(j => j.Customer.Id == customerId);
                customers.Remove(customer);
                return Task.FromResult((true, new JobId[0])) ;
            }
        }

        async Task<ApplicationForPayment> IAscotJobTrackerAsync.CreateApplicationForPayment(JobId jobId)
        {
            var job = jobs.SingleOrDefault(item => item.Id == jobId);
            var previousAFPs = ApplicationsForPayment.Where(a => a.JobId == jobId);
            var newAFP= ApplicationForPayment.Calculate(job, previousAFPs);
            ApplicationsForPayment.Add(newAFP);
            return newAFP;
        }

        async Task<CustomersOrJobs> IAscotJobTrackerAsync.CustomersAndJobsByText(string query)
        {
            var searchResult = new CustomersOrJobs();

            var _customers = customers.FindAll(customer =>
                customer.Name.Replace(" ", string.Empty).ToLower().Contains(query) ||
                (customer.Id.ToString() == query) ||
                customer.Address.Lines.Replace(" ", string.Empty).ToLower().Contains(query) ||
                customer.Address.City.Replace(" ", string.Empty).ToLower().Contains(query) ||
                (customer.Address.Postcode.Value.Replace(" ", string.Empty).ToLower() == query)).ToArray();

            searchResult.Customers = _customers;

     
            var _jobs = jobs.Select(job => new JobSummary(job)).ToArray();

            searchResult.Jobs = _jobs.Where(job =>
                (job.Id.ToString() == query) ||
                job.Customer1Line.Replace(" ", string.Empty).ToLower().Contains(query) ||
                job.Site1Line.Replace(" ", string.Empty).ToLower().Contains(query)).ToArray();

            return searchResult;
        }

        async Task<LineItem[]> IAscotJobTrackerAsync.DeleteJobLine(JobId jobId, int lineNumber)
        {
            var job = jobs.SingleOrDefault(item => item.Id == jobId);
            if (job.LineItems != null) {
                job.LineItems = job.LineItems.Where((item, index) => index + 1 != lineNumber).ToArray();                
                return job.LineItems;
            }
            return job.LineItems;
        }

        async Task<Customer> IAscotJobTrackerAsync.GetCustomer(int id)
        {
            var customer = customers.SingleOrDefault(item => item.Id == id);
            return await Task.FromResult(customer);
        }

        async Task<Job> IAscotJobTrackerAsync.GetJob(JobId id)
        {
            var job = jobs.SingleOrDefault(item => item.Id == id);
            return await Task.FromResult(job);
        }


        async Task<Customer> IAscotJobTrackerAsync.CreateCustomer(Customer newCustomer)
        {
            var id = customers.Count + 1;
            newCustomer.Id = id;
            customers.Add(newCustomer);

            return customers.SingleOrDefault(item => item.Id == id);
        }

        async Task<Customer> IAscotJobTrackerAsync.PutCustomer(int id, Customer newCustomer)
        {
            var customer = customers.SingleOrDefault(item => item.Id == id);
            if (customer == null)
            {
                customers.Add(newCustomer);
            }
            else {
                customers[customers.IndexOf(customer)] = newCustomer;
            }
            return newCustomer;
        }

        async Task<LineItem> IAscotJobTrackerAsync.PutDoor(JobId jobId, Door door)
        {
            var existingJob = jobs.SingleOrDefault(item => item.Id == jobId);
            if (existingJob.LineItems == null)
            {
                existingJob.LineItems = new[] {
                    new LineItem(1, door)
                };
            }
            else {
                LineItem[] newLineItems = new LineItem[existingJob.LineItems.Length + 1];
                existingJob.LineItems.CopyTo(newLineItems, 0);
                //var lineItemId = jobId + "-" + existingJob.LineItems.Length.ToString("D3");
                var lineItemId = existingJob.LineItems.Length + 1;
                newLineItems[existingJob.LineItems.Length] = new LineItem(lineItemId, door);
                existingJob.LineItems = newLineItems;
            }
            
            return existingJob.LineItems[existingJob.LineItems.Length - 1];
        }

        async Task<LineItem> IAscotJobTrackerAsync.PutDoorVariation(JobId jobId, Door door)
        {
            var existingJob = jobs.SingleOrDefault(item => item.Id == jobId);
            if (existingJob.LineItems == null)
            {
                existingJob.LineItems = new[] {
                    new LineItem(1, door, true)
                };
            }
            else
            {
                LineItem[] newLineItems = new LineItem[existingJob.LineItems.Length + 1];
                existingJob.LineItems.CopyTo(newLineItems, 0);
                var lineItemId = existingJob.LineItems.Length + 1;
                newLineItems[existingJob.LineItems.Length] = new LineItem(lineItemId, door, true);
                existingJob.LineItems = newLineItems;
            }

            return existingJob.LineItems[existingJob.LineItems.Length - 1];
        }

        async Task<Job> IAscotJobTrackerAsync.CreateJob(int customerId, Job newJob)
        {
            var customer = customers.Where(item => item.Id == customerId).SingleOrDefault();

            var jobId = (jobs.Count + 1).ToString();
            newJob.Id = jobId;
            newJob.SageId = new SageId(customer, jobId);
            jobs.Add(newJob);
            
            customer.Jobs = new[] {
                new Job(new Customer()
                {
                    Id = customerId,
                })
                {
                    Id = new JobId{
                        Value = newJob.Id.Value
                    },
                    SiteAddress = new Address {
                        City= newJob.SiteAddress.City,
                    }
                }
            };
            return newJob;
        }

        Task<Job> IAscotJobTrackerAsync.PutJobApproval(JobId jobId, JobApproval approval)
        {
            throw new NotImplementedException();
        }

        async Task<Job> IAscotJobTrackerAsync.PutJobCreditCheck(JobId jobId, string creditCheckNumber)
        {
            var job = jobs.SingleOrDefault(item => item.Id == jobId);
            if (job != null) {
                job.Stage = JobStage.InProgress;
                job.CreditCheck = new CreditCheck {Number = creditCheckNumber, Timestamp = DateTime.Now};
            }
            return job;
        }

        async Task<Job> IAscotJobTrackerAsync.PutJobNettOrDiscount(JobId jobId, NettOrDiscount nettOrDiscount)
        {
            var job = jobs.SingleOrDefault(item => item.Id == jobId);

            if (job != null) {
                job.NettOrDiscount = nettOrDiscount;
                
                if (nettOrDiscount.IsNettOrDiscount == 0) {
                    job.NettOrDiscount = new NettOrDiscount();
                } else if ((nettOrDiscount.PercentDiscount != 0) & nettOrDiscount.IsDiscount) {
                    job.NettOrDiscount = new NettOrDiscount(nettOrDiscount.PercentDiscount);
                } else if ((nettOrDiscount.Other != null) & nettOrDiscount.IsDiscount) {
                    job.NettOrDiscount = new NettOrDiscount(nettOrDiscount.Other);
                }
            }

            return job;
        }

        async Task<Job> IAscotJobTrackerAsync.PutJobQSContact(JobId jobId, Contact qsContact)
        {
            var job = jobs.Where(item => item.Id == jobId).SingleOrDefault();

            if (job != null)
            {
                job.QSContact = qsContact.Name;
                job.QSContactPhone = qsContact.Phone.Value;
            }

            return job;
        }

        async Task<Job> IAscotJobTrackerAsync.PutJobSiteContact(JobId jobId, Contact siteContact)
        {
            var job = jobs.Where(item => item.Id == jobId).SingleOrDefault();

            if (job != null)
            {
                job.QSContact = siteContact.Name;
                job.SiteAddress = siteContact.Address;
                job.QSContactPhone = siteContact.Phone.Value;
            }

            return job;
        }

        async Task<LineItem> IAscotJobTrackerAsync.PutNonDoorVariation(JobId jobId, NonDoorVariation nonDoorVariation)
        {
            var existingJob = jobs.Where(item => item.Id == jobId).SingleOrDefault();
            if (existingJob.LineItems == null)
            {
                existingJob.LineItems = new[] {
                    new LineItem(1, nonDoorVariation)
                };
            }
            else
            {
                LineItem[] newLineItems = new LineItem[existingJob.LineItems.Length + 1];
                existingJob.LineItems.CopyTo(newLineItems, 0);
                var lineItemId = existingJob.LineItems.Length + 1;
                newLineItems[existingJob.LineItems.Length] = new LineItem(lineItemId, nonDoorVariation);
                existingJob.LineItems = newLineItems;
            }

            return existingJob.LineItems[existingJob.LineItems.Length - 1];
        }

        async Task<bool> IAscotJobTrackerAsync.RejectJob(JobId id)
        {
            var existingJob = jobs.SingleOrDefault(item => item.Id == id);
            if (existingJob != null)
            {
                existingJob.Stage = JobStage.Complete;
                foreach (var lineItem in existingJob.LineItems)
                {
                    if (lineItem.IsDoor){ lineItem.Door.Stage = DoorStage.DoorCancelled; }
                    else { lineItem.NonDoorVariation.Stage = DoorStage.DoorCancelled; }
                }
            }
            return true;
        }

        async public Task<List<Job>> GetByStatus(JobStage[] jobStages, DoorStage[] doorStages)
        {
            
            List<Job> _jobs = new List<Job>();
            if (jobStages.Length > 1)
            {
                _jobs = jobs;
            }
            else {
               _jobs = jobs.FindAll(job => job.Stage == jobStages[0]);
            }     

            List<Job> jobs_list = new List<Job>();

            for (var i = 0; i < _jobs.Count; i++)
            {
                var jobCell = new Job(_jobs[i].Customer);
                jobCell.Id = _jobs[i].Id;
                jobCell.Stage = _jobs[i].Stage;
                jobCell.AreaCode = _jobs[i].AreaCode;
                if ((_jobs[i].LineItems != null) && (doorStages.Length == 1))
                {
                    jobCell.LineItems = _jobs[i].LineItems.Where(item => item.Door.Stage == doorStages[0]).ToArray();
                }
                if (doorStages.Length > 1)
                {
                    jobCell.LineItems = _jobs[i].LineItems;
                }
                jobs_list.Add(jobCell);
            }

            return jobs_list.ToList();
        }

        async public Task<Job> PutJobDocuments(JobId jobId, Document[] documents)
        {
            var existingJob = jobs.Where(item => item.Id == jobId).SingleOrDefault();

            if (existingJob.Documents == null)
            {
                existingJob.Documents = documents;
            }
            else
            {
                Document[] newDocuments = new Document[existingJob.Documents.Length + documents.Length];
                existingJob.Documents.CopyTo(newDocuments, 0);
                foreach (var document in documents) {
                    newDocuments.Append(document);
                }
                existingJob.Documents = newDocuments;
            }
            return existingJob;
        }


        async public Task<LineItem> PostLineItemStageComplete(JobId jobId, int lineNumber)
        {
            var job = jobs.Where(item => item.Id == jobId).SingleOrDefault();
            var lineItem = job.LineItems.Where(lineItem => lineItem.Id == lineNumber).SingleOrDefault();
            if (lineItem.IsDoor)
            {
                if ((job.AreaCode == "EX" || job.AreaCode == "SO") & (lineItem.Door.Stage == DoorStage.Delivery))
                {
                    lineItem.Door.Stage = DoorStage.Completed;
                }
                else {
                    if (lineItem.Door.Stage == DoorStage.DoorCancelled)
                    {
                        lineItem.Door.Stage = DoorStage.Completed;
                    }
                    else if (lineItem.Door.Stage != DoorStage.Completed)
                    {
                        lineItem.Door.Stage = lineItem.Door.Stage + 1;
                    }                   
                }
                
            }
            else {
                if ((job.AreaCode == "EX" || job.AreaCode == "SO") & (lineItem.NonDoorVariation.Stage == DoorStage.Delivery))
                {
                    lineItem.NonDoorVariation.Stage = DoorStage.Completed;
                }
                else
                {
                    if (lineItem.NonDoorVariation.Stage == DoorStage.DoorCancelled)
                    {
                        lineItem.NonDoorVariation.Stage = DoorStage.Completed;
                    }
                    else if (lineItem.NonDoorVariation.Stage != DoorStage.Completed) {
                        lineItem.NonDoorVariation.Stage = lineItem.NonDoorVariation.Stage + 1;
                    }                                    
                }               
            }

            var _lineItems = job.LineItems.Where(lineItem => lineItem.IsDoor ? lineItem.Door.Stage != DoorStage.Completed : lineItem.NonDoorVariation.Stage != DoorStage.Completed).ToArray();
            if (_lineItems.Length == 0) {
                job.Stage = JobStage.Complete;
            }

            return lineItem;
        }

        async public Task<LineItem> PostLineItemCancelled(JobId jobId, int lineNumber)
        {
            var job = jobs.Where(item => item.Id == jobId).SingleOrDefault();
            var lineItem = job.LineItems.Where(lineItem => lineItem.Id == lineNumber).SingleOrDefault();
            if (lineItem.IsDoor)
            {
                lineItem.Door.Stage = DoorStage.DoorCancelled;
            }
            else
            {
                lineItem.NonDoorVariation.Stage = DoorStage.DoorCancelled;
            }

            var _lineItems = job.LineItems.Where(lineItem => lineItem.IsDoor ? lineItem.Door.Stage != DoorStage.DoorCancelled : lineItem.NonDoorVariation.Stage != DoorStage.DoorCancelled).ToArray();
            if (_lineItems.Length == 0)
            {
                job.Stage = JobStage.Complete;
            }

            return lineItem;
        }
    }
}
