// AuditRow (09-Jun-2021 14:15:47)
using System;

namespace DomainModel 
{
	public class AuditRow 
	{
		public LoggedInUser LoggedInUser;
		public UserGroup Who;
		public string Command;
		private DateTime When;
		public object [] Parameters;
		public Customer? Customer;
		public Job? Job;
		public ApplicationForPayment? AFP;

	}

}