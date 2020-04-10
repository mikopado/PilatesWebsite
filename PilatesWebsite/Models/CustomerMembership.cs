using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PilatesWebsite.Models
{
    public class CustomerMembership
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public Guid MembershipId { get; set; }
    }
}
