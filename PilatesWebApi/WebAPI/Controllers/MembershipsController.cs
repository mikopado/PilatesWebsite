using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PilatesWebApi.Application.DTO.Requests;
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
        public async Task<IActionResult> CreateMembership([FromBody] CreateMembershipRequest request)
        {
            throw new NotImplementedException();
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

        [HttpGet("{membershipType?}/{classType?}")]
        public async Task<IActionResult> GetMemberships(string membershipType, string classType)
        {
            throw new NotImplementedException();

        }
    }
}
