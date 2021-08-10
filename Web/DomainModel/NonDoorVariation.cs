// NonDoorVariation (09-Jun-2021 14:15:48)
using System;

namespace DomainModel 
{
	public class NonDoorVariation 
	{
		/// <summary>
		/// end VariantType
		/// </summary>
		public string Description { get; set; }
		public decimal CostPrice { get; set; }
		public decimal SellPrice { get; set; }
		public string InstructedBy { get; set; }
		public DateTime InstructionDate { get; set; }
		public DoorStage Stage { get; set; }
		public NonDoorVariation.VariantType Type { get; set; }
		public string AscotRef { get; set; }

		public enum VariantType : int {
			Installation,
			NonDoor
		}
	}
}
