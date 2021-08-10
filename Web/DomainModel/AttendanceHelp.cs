// AttendanceHelp (15-Jul-2021 21:42:43)
using System;
using System.Collections.Generic;

namespace DomainModel 
{
	public class AttendanceHelp 
	{
		public enum ByWho : int {

			Ascot,
			Client,
			Assist

		}//end ByWho

		public AttendanceHelp.ByWho Offload { get; set; }
		public AttendanceHelp.ByWho Distribution { get; set; }
		public AttendanceHelp.ByWho Plant { get; set; }
		public AttendanceHelp.ByWho Protection { get; set; }
		public AttendanceHelp.ByWho Hoisting { get; set; }
		public AttendanceHelp.ByWho Power { get; set; }
		public AttendanceHelp.ByWho ParkingOnSite { get; set; }

	}

}