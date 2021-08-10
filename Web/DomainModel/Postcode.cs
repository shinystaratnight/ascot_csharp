// Postcode (09-Jun-2021 14:15:48)
using System;
using System.Collections.Generic;

namespace DomainModel 
{
	public struct Postcode 
	{
		public string Value { get; set; }

		Postcode(string postcode) { Value = postcode; }
		public static implicit operator string(Postcode postcode)=>postcode.Value;
		public static implicit operator Postcode(string postcode)=>new Postcode(postcode);
		
		internal static readonly Postcode TestCode = "TE5T C0DE";
	}
}