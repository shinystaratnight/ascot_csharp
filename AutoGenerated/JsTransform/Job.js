function Job(manager, instanceName) {

	this.Id = null;
	this.Customer = null;
	this.JobApproval = null;
	this.CreditChecks = [];
	this.NettOrDiscount = null;
	this.SiteContact = null;
	this.SiteContactPhone = null;
	this.SiteAddress = null;
	this.QSContact = null;
	this.QSContactPhone = null;
	this.Status = null;
	this.LineItems = [];

	this.TotalCostPrice = function(){

	};

	this.TotalSellPrice = function(){

	};

	this.TotalContractValue = function(){

	};

	this.FinalProjectionAmount = function(){

	};

	this.ApplicationForPaymentValue = function(){

	};

	this.PreviousApplicationForPaymentValue = function(){

	};

	this.TotalAppliedForToDate = function(){

	};

}//end Job

