using System;
using System.Collections.Generic;
using System.Linq;

namespace DomainModel 
{
	public class ApplicationForPayment 
	{
		public string JobId { get; set; }
		public DateTime Timestamp { get; set; }
		public DateTime? Printed { get; set; }
		public int SequenceNumber { get; set; }
		public LineApplicationForPayment[] LineApplicationForPayment { get; set; }

		public decimal TotalContractValue => LineApplicationForPayment
			.Where(l => !l.LineItem.IsVariation)
			.Sum(l => l.Value);
		public decimal FinalProjectionAmount => LineApplicationForPayment.Sum(l=>l.Value);

		public decimal ApplicationForPaymentValue { get; set; }

		public decimal TotalAppliedForToDate { get; set; }
		
		
		/// <summary>
		/// Create a new ApplicationForPayment from a Job and from the Previous ApplicationForPayments for this job. 
		/// TODO: We don't yet identify installation variations.
		/// </summary>
		/// <param name="job"></param>
		/// <param name="previousAFPs"></param>
		/// <returns></returns>
		public static ApplicationForPayment Calculate(Job job, IEnumerable<ApplicationForPayment> previousAFPs)
		{
			var isExorSO = new[] {"EX", "SO"}.Contains(job.AreaCode);
			var doorPercent = isExorSO ? 100 : 90;
			var nonDoorPercent = 100;
			var installationVarPercent = 0;

			previousAFPs = previousAFPs ?? new ApplicationForPayment[0];
			var lineApplicationForPayments = job.LineItems.Select(
					l => new LineApplicationForPayment
					{
						LineItem = l,
						//Percent =  l.IsDoor ? doorPercent : nonDoorPercent,
						Percent = l.IsDoor ? l.Door.Stage == DoorStage.Completed ? 100 : doorPercent : nonDoorPercent,
						Value = l.SellPrice
					})
				.ToArray();
			var newAFP = new ApplicationForPayment
			{
				JobId = job.Id,
				Timestamp = DateTime.Now,
				//SequenceNumber = 1 + previousAFPs.Max(a => a.SequenceNumber),				
				SequenceNumber = previousAFPs.Any() ? 1 + previousAFPs.Max(a => a.SequenceNumber) : 1,
				LineApplicationForPayment = lineApplicationForPayments,
				ApplicationForPaymentValue = 
					lineApplicationForPayments.Sum(l=>l.ApplicationValue)
						- previousAFPs.Sum(a=>a.ApplicationForPaymentValue),
				TotalAppliedForToDate = lineApplicationForPayments.Sum(l=>l.ApplicationValue)
			};
			return newAFP;
		}
	}
}
