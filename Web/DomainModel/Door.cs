// Door (09-Jun-2021 14:15:48)

namespace DomainModel 
{
	public class Door 
	{
		public DoorType.Type Type { get; set; }
		public decimal Width { get; set; }
		public decimal Height { get; set; }
		public decimal CostPrice { get; set; }
		public decimal SellPrice { get; set; }
		public string Colour { get; set; }
		public string OtherTypeDescription { get; set; }
		public string CustomerDoorRef { get; set; }
		public DoorStage Stage { get; set; }
	}
}
