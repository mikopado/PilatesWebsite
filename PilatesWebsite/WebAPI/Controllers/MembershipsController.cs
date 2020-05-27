using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PilatesWebsite.Application.DTO.Requests;
using PilatesWebsite.Application.Services;
using PilatesWebsite.WebAPI.Controllers.Base;

namespace PilatesWebsite.WebAPI.Controllers
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
