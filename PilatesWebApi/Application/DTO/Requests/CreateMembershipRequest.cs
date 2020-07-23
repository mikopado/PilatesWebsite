using System.Collections.Generic;

namespace PilatesWebApi.Application.DTO.Requests
{
    public class CreateMembershipsRequest
    {
        public List<MembershipRequest> Memberships { get; set; }
    }
}
