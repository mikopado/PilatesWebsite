using Microsoft.AspNetCore.Mvc;
using PilatesWebApi.Application.DTO.Requests;
using PilatesWebApi.Application.ResponseObjects;
using PilatesWebApi.Application.Services;
using PilatesWebApi.WebAPI.Controllers.Base;
using System;
using System.Net;
using System.Threading.Tasks;

namespace PilatesWebApi.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MembersController : BaseController
    {
        private readonly IMemberService _memberService;

        public MembersController(IMemberService memberService)
        {
            _memberService = memberService;
        }

        [HttpPost]
        public async Task<IActionResult> RegisterMember([FromBody] RegisterMemberRequest request)
        {
            await _memberService.AddMemberAsync(request);
            return Ok(new ApiResponse(HttpStatusCode.OK));
        }

        [HttpGet]
        public async Task<IActionResult> GetMembers()
        {
            var members = await _memberService.GetMembersAsync();
            return Ok(new ApiResponse(HttpStatusCode.OK, members));

        }

        [HttpGet("membership/{id}")]
        public async Task<IActionResult> GetAllMembersForMembership(Guid membershipId)
        {
            throw new NotImplementedException();

        }

        [HttpGet("membership/{type}")]
        public async Task<IActionResult> GetAllMembersForMembershipType(string membershipType)
        {
            throw new NotImplementedException();

        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetMember(Guid id)
        {
            throw new NotImplementedException();

        }
    }
}
