// DoorType (09-Jun-2021 14:15:48)

namespace DomainModel 
{
	public class DoorType 
	{
		public enum Type : int {

			Other = 0,
			HingedDoor,
			HingedDoorFireRated,
			HingedDoorSR1,
			HingedDoorSR1FireRated,
			SectionalOverheadDoorManual,
			__ETC__

		}//end Type

		/// <summary>
		/// end Type
		/// </summary>
		public DoorType.Type Value;
		public string Other;

	}

}