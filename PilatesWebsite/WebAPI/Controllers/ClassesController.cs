using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PilatesWebsite.Application.DTO;
using PilatesWebsite.Models;
using PilatesWebsite.Services;

namespace PilatesWebsite.Controllers
{
    // TODO: define url path naming
    [Route("api/[controller]")]
    [ApiController]
    public class ClassesController : ControllerBase
    {
        private readonly IClassService _classService;

        public ClassesController(IClassService classService)
        {
            _classService = classService;
        }

        [HttpGet]
        public async Task<IActionResult> GetClasses()
        {
            return Ok();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetClass(Guid id)
        {
            return Ok();

        }

        [HttpPost]
        public async Task<IActionResult> AddClass([FromBody] AddClassRequest classRequest)
        {
            return Ok();

        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteClass(Guid id)
        {
            return Ok();

        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateClass(Guid id, [FromBody] UpdateClassRequest classRequest)
        {
            return Ok();

        }
    }
}