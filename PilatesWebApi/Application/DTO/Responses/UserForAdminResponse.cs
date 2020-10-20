using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PilatesWebApi.Application.DTO.Responses
{
    public class UserForAdminResponse
    {
        public Guid Id { get; set; }
        public string Email { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
