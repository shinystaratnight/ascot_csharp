import { 
  DesignGuide,
  Search,
  CustomerJob,
  JobList,
  Job
} from "./views"

var dashRoutes = [
 
  {
    path: "/design-guide",
    name: "Design Guide",
    component: DesignGuide,
  },
  
  {
    path: "/new/:customerId",
    name: "CustomerJob",
    component: CustomerJob,
  },
  {
    path: "/new",
    name: "CustomerJob",
    component: CustomerJob,
  },
  {
    path: "/job/:jobId",
    name: "Job",
    component: Job,
  },
  {
    path: "/job-list",
    name: "JobList",
    component: JobList,
  },  
  {
    path: "/",
    name: "Search",
    component: Search,
  }
];
export default dashRoutes
