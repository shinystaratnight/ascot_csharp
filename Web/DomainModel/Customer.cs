// Customer (09-Jun-2021 14:15:48)

namespace DomainModel 
{
	public class Contact
	{
		public string Name { get; set; }
		public Address Address { get; set; }
		public PhoneNumber Phone { get; set; }

		public string ToShortOneLine() => string.Join(" ", Name, Phone, Address?.NumberAndPostcode);
	}
	
	
	public class Customer : Contact 
	{
		public int Id { get; set; }
        public Job[] Jobs { get; set; }
	}
	

	public struct PhoneNumber
	{
		public string Value { get; set; }
		public PhoneNumber(string value) { Value = value; }

		public static implicit operator string(PhoneNumber number) => number.Value;
		public static implicit operator PhoneNumber(string number) => new PhoneNumber(number);
		
	}
}