Create Type JobStage As Enum (
  'Abeyance',
	'AwaitingAuthorisation',
	'InProgress',
	'Complete',
	'Rejected'
)
;
Create Type DoorStage As Enum(
    'DrawingOffice',
    'CammingSpeccing',
    'Manufacture',
    'Delivery',
    'Completed',
    'DoorCancelled',
    'Problem'
)
;

Create Type DoorTypeName As (Name Varchar(100));

Create Type UserGroupName As (Name Varchar(200));

Create Table Address
(
	AddressId Integer Not Null Generated Always As Identity,
	Lines VarChar(50) Not Null,
	City VarChar(50) Not Null,
	Postcode VarChar(10) Not Null,
	Constraint Address_Pk Primary Key (AddressId)
)
;

Create Table Customer
(
	CustomerId Integer Not Null Generated Always As Identity,
	Name VarChar(50) Not Null,
	AddressId Integer Not Null,
	Constraint Customer_Pk Primary Key (CustomerId),
	Constraint Customer_Address Foreign Key (AddressId) References Address
)
;

Create Table Job
(
	JobId Integer Not Null,
	CustomerId Integer Not Null,
	Sitecontact VarChar(50) Not Null,
	Sitecontactphone VarChar(50),
	SiteaddressId Integer Not Null,
	Qscontact VarChar(50),
	Qscontactphone Text,
	Stage Jobstage Not Null,
	CreatedOn Timestamp With Time Zone Default current_timestamp ,
	Constraint Job_Pk Primary Key (JobId),
	Constraint Job_Customer Foreign Key (CustomerId) References Customer,
	Constraint Job_SiteAddress Foreign Key (SiteaddressId) References Address
)
;
Create Sequence JobIdPerYear As Integer Minvalue 1 Start With 1 Owned By Job.JobId
;
Create Table Nettordiscount
(
	JobId Integer,
	Isnettordiscount Char(1) Not Null,
	Percentdiscount Numeric,
	Other VarChar(50),
	Constraint Nettordiscount_Pk Primary Key (JobId),
	Constraint Nettordiscount_Job Foreign Key (JobId) References Job
)
;

Create Table Lineitem
(
	JobId Integer Not Null,
	LineId Integer Not Null,
	Constraint Lineitem_Pk Primary Key (JobId, LineId),
  Constraint Lineitem_Job Foreign Key (JobId) References Job
)
;

Create Table Doortype
(
	DoorType DoorTypeName Not Null,
	Constraint Doortype_Pk Primary Key (DoorType)
)
;

Create Table Door
(
  JobId Integer Not Null,
	LineId Integer Not Null,
	Width Numeric,
	Height Numeric,
	Costprice Numeric,
	Sellprice Numeric,
	Colour VarChar(50),
	Stage Doorstage,
	Doortype DoorTypeName,
	DoorOtherType text,
	Constraint Door_Pk Primary Key (JobId,LineId),
	Constraint Door_Type Foreign Key (Doortype) References Doortype,
	Constraint Door_LineItem Foreign Key (JobId,LineId) References Lineitem
)
;

Create Table Nondoorvariation
(
  JobId Integer Not Null,
	LineId Integer Not Null,
	Type Integer Not Null,
	Description VarChar(50),
	Costprice Numeric Not Null,
	Sellprice Numeric Not Null,
	Instructedby UserGroupName Not Null,
	Instructiondate Timestamp With Time Zone Not Null,
	Stage Doorstage Not Null,
	Constraint Nondoorvariation_Pk Primary Key (JobId,LineId),
	Constraint Nondoorvariation_LineItem Foreign Key (JobId,LineId) References Lineitem
)
;

Create Table Jobapproval
(
	JobId Integer Not Null,
	UsergroupId Integer Not Null,
	Timestamp Timestamp With Time Zone Default current_timestamp ,
	Constraint Jobapproval_Pk Primary Key (JobId),
	Constraint Jobapproval_Job  Foreign Key (JobId) References Job
)
;
Create Table Creditcheck
(
	CreditcheckId Integer Not Null Generated Always As Identity,
	JobId Integer Not Null,
	Number VarChar(50) Not Null,
	Timestamp Timestamp With Time Zone Default current_timestamp,
	UsergroupId Integer Not Null,
  Constraint Creditcheck_Pk Primary Key (CreditcheckId),
  Constraint Creditcheck_Job Foreign Key (JobId) References Job
)
;

Create Table Applicationforpayment
(
	ApplicationforpaymentId Integer Not Null Generated Always As Identity,
  JobId Integer Not Null,
	Sequencenumber Integer Not Null,
	Timestamp Timestamp With Time Zone Not Null,
	LastPrinted Timestamp With Time Zone,
	Constraint Applicationforpayment_Id Primary Key (ApplicationforpaymentId),
	Constraint Applicationforpayment_Jon Foreign Key (JobId) References Job
)
;

Create Table Lineapplicationforpayment
(
	ApplicationforpaymentId Integer Not Null,
	JobId Integer Not Null,
	LineId Integer Not Null,
	Percent Integer Not Null,
	Grossamount Numeric Not Null,
	Nettamount Numeric Not Null,
	Constraint Lineapplicationforpayment_Pk Primary Key (ApplicationforpaymentId,LineId),
	Constraint Lineapplicationforpayment_AFP Foreign Key (ApplicationforpaymentId) references Applicationforpayment,
	Constraint Lineapplicationforpayment_Line Foreign Key (JobId,LineId) References Lineitem
)
;

Create Table Usergroup
(
	UsergroupId Integer Not Null Generated Always As Identity,
	Name Usergroupname Not Null,
	CreatedOn Timestamp With Time Zone Default current_timestamp,
	Archivedon Timestamp With Time Zone,
	Constraint Usergroup_Pk Primary Key (UsergroupId),
	Constraint Usergroup_Name Unique (Name,Archivedon)
)
;

Create Table Loggedinuser
(
  LoggedInUserId Integer Not Null Generated Always As Identity,
	LoginName Usergroupname Not Null,
	Archivedon Timestamp With Time Zone,
	Constraint Loggedinuser_Pk Primary Key (LoggedInUserId),
	Constraint Loggedinuser_Name Unique (Loginname,Archivedon)
)
;

Create Table Auditrow
(
	AuditrowId Bigint Not Null Generated Always As Identity,
	Who Integer Not Null,
	LoggedInUserId Integer Not Null,
	Command Text Not Null,
	Timestamp Timestamp With Time Zone Default current_timestamp,
	Parameters Text,
	Constraint Auditrow_Pk Primary Key (AuditrowId),
	Constraint Auditrow_Who Foreign Key (Who) References Usergroup,
	Constraint Auditrow_Loggedinuser Foreign Key (LoggedInUserId) References Loggedinuser
)
;
Create Table AuditRowEntities
(
	AuditrowId Bigint Not Null,
	CustomerId Integer Null,
	JobId Integer Null,
	AfpId Integer Null,
	Constraint AuditrowEntities_Pk Primary Key (AuditrowId),
	Constraint AuditrowEntities_AuditRow Foreign Key (AuditrowId) References Auditrow ,
  Constraint Auditrowentities_Customer Foreign Key (CustomerId) References Customer,
  Constraint Auditrowentities_JobId Foreign Key (JobId) References Job,
  Constraint Auditrowentities_Afp Foreign Key (AfpId) References Applicationforpayment
)
;


Insert Into Doortype Values
    (Row('Other')),
    (Row('HingedDoor')),
    (Row('HingedDoorFireRated')),
    (Row('HingedDoorSR1')),
    (Row('HingedDoorSR1FireRated')),
    (Row('SectionalOverheadDoorManual')),
    (Row('__ETC__'))
;
Insert Into Loggedinuser (LoggedinuserId, Loginname) OverrIding System Value Values (0, Row ('Database')) ;
Insert Into Usergroup (UsergroupId, Name) OverrIding System Value Values (0,Row ('Database')) ;
Insert Into Auditrow (Who, Loggedinuserid, Command, Parameters)
  Values (0, 0,
          'Insert Into Loggedinuser (LoggedinuserId, Loginname) OverrIding System Value Values (0, ''Database'') ;',
          '{"loggedinuserId":0,"Loginname":"Database"}'::jsonb
          )
;
Insert Into Auditrow (Who, Loggedinuserid, Command, Parameters)
  Values (0, 0,
          'Usergroup (UsergroupId, Name) OverrIding System Value Values (0,''Database'') ;',
          '{"UsergroupId":0,"Name":"Database"}'::jsonb
          )
;
Insert Into Auditrow (Who, Loggedinuserid, Command, Parameters)
  Select 0 Who,
         0 Loggedinuserid,
         'Insert Into DoorType (DoorType) Values (@DoorTypeValue)' Command,
         ('"' || Doortype.Doortype || '"')::jsonb Parameters From Doortype