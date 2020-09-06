using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PilatesWebApi.Application.ResponseObjects;
using PilatesWebApi.WebAPI.Controllers.Base;

namespace PilatesWebApi.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class HealthController : BaseController
    {
        [HttpGet]
        public IActionResult CheckHealth()
        {
            return Ok(new ApiResponse(HttpStatusCode.OK, null));
        }
    }
}