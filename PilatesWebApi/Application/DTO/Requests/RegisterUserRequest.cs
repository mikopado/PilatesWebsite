using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PilatesWebApi.Application.DTO.Requests
{
    public class RegisterUserRequest
    {
        public Guid Id { get; set; }
        public string Email { get; set; }
    }
}
