// UserGroup (09-Jun-2021 14:15:48)
using System;
using System.Collections.Generic;

namespace DomainModel 
{
	public class UserGroup 
	{
		public string Name;
		public List<UserGroup> Members;
		public DateTime ArchivedOn;
	}
}