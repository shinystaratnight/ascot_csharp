// LineApplicationForPayment (09-Jun-2021 14:15:48)

namespace DomainModel 
{
	public struct LineApplicationForPayment {

		public int Percent { get; set; }

		public LineItem LineItem { get; set; }

		public decimal Value { get; set; }

		public decimal ApplicationValue => Value * Percent / 100;

	}//end LineApplicationForPayment

}
