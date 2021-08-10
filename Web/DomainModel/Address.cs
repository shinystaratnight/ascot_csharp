// Address (15-Jul-2021 21:42:42)
using System;
using System.Collections.Generic;
using System.Linq;

namespace DomainModel 
{
	public class Address 
	{
		public string Lines { get; set; }
		public string City { get; set; }
		public Postcode Postcode { get; set; }
		
		public string NumberAndPostcode => 
			//string.Join(" ",
				//Lines?.Split(new[]{' ', ',', '\n', '\r'}).FirstOrDefault(),Postcode);
			string.Join(" ", Lines?.Split(new[]{' ', ',', '\n', '\r'}).FirstOrDefault(), Postcode.Value);

	}

}