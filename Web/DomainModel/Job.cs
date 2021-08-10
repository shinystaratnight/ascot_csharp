// Job (09-Jun-2021 14:15:48)

using System;

namespace DomainModel 
{
	public class Job
	{
		public JobId Id { get; set; }
		public SageId SageId { get; set; }
		public Customer Customer { get; set; }
		public JobApproval JobApproval;
		public CreditCheck CreditCheck { get; set; }
		public NettOrDiscount NettOrDiscount { get; set; }
		public JobStage Stage { get; set; }

		public DateTime CreatedOn { 
			get
			{
				return DateTime.Today;
			}
		}

		public string SiteContact { get; set; }
		public string SiteContactPhone { get; set; }
		public string SiteEmail { get; set; }
		public Address SiteAddress { get; set; }
		public string QSContact { get; set; }
		public string QSContactPhone { get; set; }
		public string QSEmail { get; set; }
		
		public AttendanceHelp AttendanceAgreed { get; set; }
		public DateTime InstallationDateWc { get; set; }
		public int NumVisits { get; set; }
		public string AreaCode { get; set; }
		public Document[] Documents { get; set; }

		public LineItem[] LineItems { get; set; }
		
		public decimal TotalCostPrice => 0;

		public decimal TotalSellPrice => 0;


		public JobSummary Summary() => new JobSummary(this);

        public Job(Customer customer) { Customer = customer; }
	}

	public class JobSummary
	{
		public string Id { get; set; }
		public JobStage Stage { get; set; }
        public string Site1Line { get; set; }
        public string Customer1Line { get; set; }

		public string CustomerName { get; set; }

		public JobSummary(Job job)
		{
			Id = job.Id;
			Stage = job.Stage;
            Site1Line = new Contact
            {
                Name = job.SiteContact,
                Phone = job.SiteContactPhone,
                Address = job.SiteAddress

            }.ToShortOneLine();
            Customer1Line = job.Customer.ToShortOneLine();
			CustomerName = job.Customer.Name;
		}
		public JobSummary(){}
	}

	public struct JobId
	{
		public string Value { get; set; }

		public JobId(string id) => Value = id;

		public static implicit operator string(JobId jobId) => jobId.Value;
		public static implicit operator JobId(string jobId) => new JobId(jobId);
	}

	public struct SageId
	{ 
		public string Value { get; set; }

		public SageId(Customer customer, string jobId)
		{
			DateTime now = DateTime.Today;
			Value = customer.Name.Trim().Substring(0, 3).ToUpper() + now.ToString("yy") + jobId.Substring(jobId.Length - 1 );
		}
	}
}