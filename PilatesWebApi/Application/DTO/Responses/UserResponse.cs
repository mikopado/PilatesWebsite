using PilatesWebApi.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PilatesWebApi.Application.DTO.Responses
{
    public class UserResponse
    {
        public Guid Id { get; set; }
        public string Email { get; set; }        
    }
}
