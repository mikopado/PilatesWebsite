using PilatesWebApi.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PilatesWebApi.Application.DTO.Responses
{
    public class UserMemberResponse
    {
        public UserResponse User { get; set; }
        public MemberResponse Member { get; set; }
        public MembershipResponse Membership { get; set; }
        public IEnumerable<ClassBookingResponse> Classes { get; set; }
    }
}
