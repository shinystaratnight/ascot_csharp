using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
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

namespace TestBase
{
    public static class Ext
    {
        public static IEnumerable<T> ShouldContainValueEqual<T>(this IEnumerable<T> actual,
            T expectedItem,
            string comment = null,
            params object[] args)
        {
            return Assert.That<IEnumerable<T>>(
                actual, 
                a => a.Any(i => i.EqualsByValue(expectedItem)), 
                comment ?? string.Format("Should contain a Value match for {0}", expectedItem), args);
        }
        
    }    
}

namespace Api.Tests
{
    public class JobsControllerSearchTests : FixtureBaseFor<JobsController>
    {
        [Theory]
        [InlineData(MockAscotJobTrackerAsync.Idjob1,MockAscotJobTrackerAsync.Idjob1)]
        public async Task Search_SearchesJobs(string query, string expectedId)
        {
            var expected = MockAscotJobTrackerAsync.jobs.First(j => j.Id == expectedId);
            
            var rawResult = await UnitUnderTest.CustomersAndJobsByText(query);
            
            output.WriteLine(JsonConvert.SerializeObject(rawResult));
            
            var result= rawResult.ShouldBeOfType<ObjectResult>();
            result.StatusCode.ShouldBe(200);
            
            // var actual= result.Value
            //     .Property<JobSummary[]>("Jobs")
            //     .ShouldBeOfType<JobSummary[]>();

            var actual = result.Value
                .ShouldBeOfType<CustomersOrJobs>()
                .Jobs.ShouldNotBeEmpty();

            actual.ShouldContain(x => x.EqualsByValue(new JobSummary(expected)));
        }

        public JobsControllerSearchTests(ITestOutputHelper output) => this.output = output;
        
        readonly ITestOutputHelper output;
    }
}