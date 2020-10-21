using System;

namespace PilatesWebApi.Application.DTO.Responses
{
    public class MemberUserResponse
    {
        public Guid Id { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime Dob { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
