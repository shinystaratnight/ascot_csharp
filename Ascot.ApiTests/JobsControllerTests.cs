using System.Net;
using System.Threading.Tasks;
using AscotJobs.Controllers;
using AscotJobs.DomainModel;
using DomainModel;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Xunit;
using Xunit.Abstractions;
using TestBase;
using FixtureBase;

namespace Api.Tests
{
    public class JobsControllerTests : FixtureBaseFor<JobsController>
    {
        [Fact]
        public async Task Get_GetsAJob()
        {

            var controller = UnitUnderTest;
            var rawResult = await controller.GetJob(MockAscotJobTrackerAsync.TestJob.Id);
            output.WriteLine(JsonConvert.SerializeObject(rawResult));
            var result= rawResult.ShouldBeOfType<ObjectResult>();
            result.StatusCode.ShouldBe(200);
            result.Value.ShouldBeOfType<Job>().ShouldEqualByValue(MockAscotJobTrackerAsync.TestJob);
        }

        [Fact]
        public async Task PutFails_GivenNoCustomer()
        {
            var job = new Job(new Customer {Id = 99})
            {
                Id = "99",
                QSContact = "qscontact",
                QSContactPhone = "01000000000",
                SiteAddress = new Address{Lines="Address",City="City",Postcode = "A1 1AA"},
                SiteContact = "sitecontact",
                SiteContactPhone = "0200000000"
            };
            var controller = UnitUnderTest;
            var result = (await controller.CreateJob(job.Customer.Id, job)).ShouldBeOfType<StatusCodeResult>();
            output.WriteLine(JsonConvert.SerializeObject(result));
            result.StatusCode.ShouldBe((int)HttpStatusCode.NotFound);
        }
        
        
        public JobsControllerTests(ITestOutputHelper output) => this.output = output;
        
        readonly ITestOutputHelper output;
    }
}