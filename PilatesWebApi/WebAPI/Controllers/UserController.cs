using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
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
    [Produces("application/json")]
    public class UserController : BaseController
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public async Task<IActionResult> GetUserDetails(Guid id)
        {
            var user = await _userService.GetAsync(id);
            return Ok(new ApiResponse(HttpStatusCode.OK, user));
        }

        [HttpPost]
        public async Task<IActionResult> RegisterUser([FromBody] RegisterUserRequest userRequest)
        {
            await _userService.RegisterUserAsync(userRequest);
            return Ok(new ApiResponse(HttpStatusCode.OK));
        }
    }
}