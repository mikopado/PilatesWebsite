using System;

namespace PilatesWebApi.Application.DTO.Requests
{
    public class RegisterMemberRequest
    {
        public Guid MembershipId { get; set; }
        public Guid UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public DateTime Dob { get; set; }
    }
}