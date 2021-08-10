using System;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

namespace AscotJobs.Controllers
{
    public class Diagnostics : Controller
    {
        readonly IWebHostEnvironment env;

        public Diagnostics(IWebHostEnvironment env) { this.env = env; }

        public IActionResult Index() { return Content($"Hello {env.ApplicationName} | {env.EnvironmentName} | {DateTime.Now}"); }
        
        public IActionResult Status404() { return StatusCode(404); }
        public IActionResult Status500() { return StatusCode(500,"Don't know."); }
    }
}