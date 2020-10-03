using System;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PilatesWebApi.Application.DTO.Requests;
using PilatesWebApi.Application.ResponseObjects;
using PilatesWebApi.Application.Services;
using PilatesWebApi.WebAPI.Controllers.Base;

namespace PilatesWebApi.WebAPI.Controllers.Controllers
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
        public async Task<IActionResult> AddClasses([FromBody] AddClassesRequest classRequest)
        {
            await _classService.AddClassesAsync(classRequest);
            return Ok(new ApiResponse(HttpStatusCode.OK));

        }

        [HttpPost("timetable")]
        public async Task<IActionResult> AddClassesWithTimetable([FromBody] AddClassWithTimetableRequest classRequest)
        {
            await _classService.AddClassesWithTimetableAsync(classRequest);
            return Ok(new ApiResponse(HttpStatusCode.OK));

        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteClass(Guid id)
        {
            await _classService.DeleteClassAsync(id);
            return Ok(new ApiResponse(HttpStatusCode.OK));

        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateClass(Guid id, [FromBody] UpdateClassRequest classRequest)
        {
            await _classService.UpdateClassAsync(id, classRequest);
            return Ok(new ApiResponse(HttpStatusCode.OK));

        }

        //[HttpGet("timetable/{start}/{end}")]
        //public async Task<IActionResult> GetTimetable(DateTime start, DateTime end)
        //{
        //    var timetable = await _classService.GetTimetableAsync(start, end);
        //    return Ok(new ApiResponse(HttpStatusCode.OK, timetable));
        //}
        [HttpGet("timetable/week")]
        public async Task<IActionResult> GetWeeklyTimetable()
        {
            var timetable = await _classService.GetWeeklyTimetableAsync();
            return Ok(new ApiResponse(HttpStatusCode.OK, timetable));
        }

        [HttpGet("type/{type}")]
        public async Task<IActionResult> GetClassesByType(string type)
        {
            var classes = await _classService.GetClassesAsync(x => x.Type.ToString() == type);
            return Ok(new ApiResponse(HttpStatusCode.OK, classes));

        }

        [HttpGet("teacher")]
        public async Task<IActionResult> GetClassesWithTeacher()
        {
            var classes = await _classService.GetClassesWithTeacherAsync();
            return Ok(new ApiResponse(HttpStatusCode.OK, classes));
        }

        [HttpGet("{id}/teacher")]
        public async Task<IActionResult> GetClassWithTeacher(Guid id)
        {
            var clsWithTeacher = await _classService.GetClassWithTeacherAsync(id);
            return Ok(new ApiResponse(HttpStatusCode.OK, clsWithTeacher));
        }

        [HttpPost("booking")]
        public async Task<IActionResult> BookClass(ClassBookingRequest request)
        {
            var bookingId = await _classService.BookClassAsync(request);
            return Ok(new ApiResponse(HttpStatusCode.OK, bookingId));
        }

        [HttpDelete("booking/{id}")]
        public async Task<IActionResult> CancelClassBooking(Guid id)
        {
            await _classService.CancelClassBookingAsync(id);
            return Ok(new ApiResponse(HttpStatusCode.OK));
        }
    }
}