using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PilatesWebsite.Application.DTO;
using PilatesWebsite.Application.ResponseObjects;
using PilatesWebsite.Models;
using PilatesWebsite.Services;
using PilatesWebsite.WebAPI.Controllers.BaseController;

namespace PilatesWebsite.Controllers
{
    // TODO: define url path naming
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class ClassesController : BaseController
    {
        private readonly IClassService _classService;

        public ClassesController(IClassService classService)
        {
            _classService = classService;
        }

        [HttpGet]
        public async Task<IActionResult> GetClasses()
        {
            var classes = await _classService.GetAllClassesAsync();
            if (classes is null) return NotFound(new ApiResponse(HttpStatusCode.NotFound, "No classes have been found!")); 
            return Ok(new ApiResponse(HttpStatusCode.OK, classes));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetClass(Guid id)
        {
            var cls = await _classService.GetClassAsync(id);
            if (cls is null) return NotFound(new ApiResponse(HttpStatusCode.NotFound, "No class with the given Id has been found!"));

            return Ok(new ApiResponse(HttpStatusCode.OK, cls));

        }

        [HttpPost]
        public async Task<IActionResult> AddClass([FromBody] AddClassRequest classRequest)
        {
            await _classService.AddClassAsync(classRequest);
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