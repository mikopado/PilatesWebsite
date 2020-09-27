using PilatesWebApi.Domain.Models;
using System;

namespace PilatesWebApi.Application.DTO.Responses
{
    public class MembershipResponse
    {
        public Guid Id { get; set; }
        public MembershipType Type { get; set; }
        public ClassType ClassType { get; set; }
        public DateTime ExpirationTime { get; set; }
        public decimal Price { get; set; }
        public int Days { get; set; }
    }
}