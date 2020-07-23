using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PilatesWebApi.Application.DTO.Requests;
using PilatesWebApi.Application.ResponseObjects;
using PilatesWebApi.Application.Services;
using PilatesWebApi.WebAPI.Controllers.Base;

namespace PilatesWebApi.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeachersController : BaseController
    {
        private readonly ITeacherService _teacherService;

        public TeachersController(ITeacherService teacherService)
        {
            _teacherService = teacherService;
        }

        [HttpGet]
        public async Task<IActionResult> GetTeachers()
        {
            var classes = await _teacherService.GetTeachersAsync();
            if (classes is null) return NotFound(new ApiResponse(HttpStatusCode.NotFound, "No teachers have been found!"));
            return Ok(new ApiResponse(HttpStatusCode.OK, classes));
        }

        [HttpPost]
        public async Task<IActionResult> AddTeachers([FromBody] AddTeachersRequest teacherRequest)
        {
            await _teacherService.AddTeachersAsync(teacherRequest);
            return Ok(new ApiResponse(HttpStatusCode.OK));
        }

    }
}
