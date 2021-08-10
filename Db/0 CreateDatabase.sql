Create Role AscotJobsDbOwner CreateDb CreateRole Login Password '' ;
Create Role AscotJobsApi      Login Password '';
Create Role AscotJobsReadOnly Login Password '';

Grant AscotJobsDbOwner to current_user ;
Grant AscotJobsReadOnly to AscotJobsApi;
Grant AscotJobsApi to AscotJobsDbOwner;


CREATE DATABASE AscotJobs With Owner AscotJobsDbOwner ;
Alter Database AscotJobs set client_encoding='UTF8' ;

Grant Connect , Temporary on Database AscotJobs TO AscotJobsApi ;
Grant Connect , Temporary on Database AscotJobs TO AscotJobsReadOnly ;
Revoke Connect On Database AscotJobs From Public ;