using PilatesWebApi.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PilatesWebApi.Application.DTO.Responses
{
    public class MemberMembershipResponse
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime Dob { get; set; }      
        public MembershipType MembershipType { get; set; }
        public ClassType ClassType { get; set; }
        public decimal Price { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime ExpirationTime { get; set; }
    }
}
