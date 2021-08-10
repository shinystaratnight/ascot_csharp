// LineItem (09-Jun-2021 14:15:48)

namespace DomainModel 
{
	/// TODO: We don't yet identify installation variations.
	public class LineItem {

		public int Id { get; set; }

		public decimal CostPrice => IsDoor ? Door.CostPrice : NonDoorVariation.CostPrice;
		
		public decimal SellPrice => IsDoor ? Door.SellPrice : NonDoorVariation.SellPrice;
		public Door? Door { get; set; }
		public NonDoorVariation? NonDoorVariation { get; set; }
		public bool IsVariation { get; }
		public bool IsDoor => Door != null;
		public bool IsNonDoor => NonDoorVariation != null;

		///<summary>Creates a LineItem for a Door or Door Variation </summary>
		/// <param name="door"></param>
		/// <param name="isVariation"></param>
		public LineItem(int id, Door door, bool isVariation) {
			Id = id;
			Door = door; 
			NonDoorVariation = null;
			IsVariation=isVariation;
		}
		
		///<summary>Creates a LineItem for Non-Door Variation </summary>
		/// <param name="nonDoorVariation"></param>
		public LineItem(int id, NonDoorVariation nonDoorVariation)
		{
			Id = id;
			Door = null;
			NonDoorVariation = nonDoorVariation; 
			IsVariation=true;
		}
		
		///<summary>Creates a LineItem for Door (not a variation) </summary>
		public LineItem(int id, Door door) {
			Id = id;
			Door = door;
			NonDoorVariation = null;
			IsVariation = false;
		}
	}
}