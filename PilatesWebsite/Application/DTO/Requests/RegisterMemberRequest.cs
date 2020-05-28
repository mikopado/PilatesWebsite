using System;
using System.Reflection.Metadata.Ecma335;

namespace PilatesWebsite.Application.DTO.Requests
{
    public class RegisterMemberRequest
    {
        public Guid MembershipId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}