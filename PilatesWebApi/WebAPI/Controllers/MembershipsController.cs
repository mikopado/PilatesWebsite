using System;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PilatesWebApi.Application.DTO.Requests;
using PilatesWebApi.Application.ResponseObjects;
using PilatesWebApi.Application.Services;
using PilatesWebApi.WebAPI.Controllers.Base;

namespace PilatesWebApi.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class MembershipsController : BaseController
    {
        private readonly IMembershipService _membershipService;

        public MembershipsController(IMembershipService membershipService)
        {
            _membershipService = membershipService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateMemberships([FromBody] CreateMembershipsRequest request)
        {
            await _membershipService.AddMembershipsAsync(request);
            return Ok(new ApiResponse(HttpStatusCode.OK));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> CancelMembership(Guid id)
        {
            throw new NotImplementedException();

        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetMembership(Guid id)
        {
            throw new NotImplementedException();

        }

        [HttpGet]
        public async Task<IActionResult> GetMemberships()
        {
            var memberships = await _membershipService.GetMembershipsAsync();
            if (memberships is null) return NotFound(new ApiResponse(HttpStatusCode.NotFound, "No memberships have been found!"));
            return Ok(new ApiResponse(HttpStatusCode.OK, memberships));

        }

        [HttpGet("member")]
        public async Task<IActionResult> GetMemberMemberships()
        {
            var memberMemberships = await _membershipService.GetMembershipsMemberAsync();
            return Ok(new ApiResponse(HttpStatusCode.OK, memberMemberships));
        }
    }
}
