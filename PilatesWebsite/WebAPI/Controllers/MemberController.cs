using Microsoft.AspNetCore.Mvc;
using PilatesWebsite.Application.DTO.Requests;
using PilatesWebsite.Application.Services;
using PilatesWebsite.WebAPI.Controllers.Base;
using System;
using System.Threading.Tasks;

namespace PilatesWebsite.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MemberController : BaseController
    {
        private readonly IMemberService _memberService;

        public MemberController(IMemberService memberService)
        {
            _memberService = memberService;
        }

        [HttpPost]
        public async Task<IActionResult> RegisterMember([FromBody] RegisterMemberRequest request)
        {
            throw new NotImplementedException();
        }

        [HttpGet]
        public async Task<IActionResult> GetAllMembers()
        {
            throw new NotImplementedException();

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
