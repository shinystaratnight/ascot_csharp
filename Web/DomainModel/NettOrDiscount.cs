// NettOrDiscount (09-Jun-2021 14:15:48)
using System;
using System.Collections.Generic;

namespace DomainModel 
{
	public class NettOrDiscount 
	{
		public Which IsNettOrDiscount { get; set; }
		public decimal PercentDiscount { get; set; }
		public string? Other { get; set; }
		public bool IsNett => IsNettOrDiscount == Which.NETT;
		public bool IsDiscount => IsNettOrDiscount == Which.LessDiscount;

		public NettOrDiscount() => IsNettOrDiscount = Which.NETT;
		public NettOrDiscount(decimal percentDiscount)
		{
			PercentDiscount = percentDiscount;
			IsNettOrDiscount = Which.LessDiscount;
			Other = null;
		}

		public NettOrDiscount(string other)
		{
			PercentDiscount = 0;
			IsNettOrDiscount = Which.LessDiscount;
			Other = other;
		}

		public override string ToString() { return IsNettOrDiscount + (IsDiscount?(" "+PercentDiscount):"") ; }

		public enum Which : int {
			NETT,
			LessDiscount
		}
	}
}