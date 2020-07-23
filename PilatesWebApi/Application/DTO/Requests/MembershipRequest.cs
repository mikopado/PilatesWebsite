using PilatesWebApi.Domain.Models;

namespace PilatesWebApi.Application.DTO.Requests
{
    public class MembershipRequest
    {
        public MembershipType Type { get; set; }
        public ClassType ClassType { get; set; }
    }
}