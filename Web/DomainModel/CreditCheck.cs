// CreditCheck (09-Jun-2021 14:15:47)
using System;

namespace DomainModel 
{
	public class CreditCheck 
	{
		public string Number { get; set; }
		public DateTime Timestamp { get; set; }
		public UserGroup Who;
	}
}