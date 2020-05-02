using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PilatesWebsite.Models
{
    public class Member : IDeletable
    {
        public Guid Id { get; set; }
        public User User { get; set; }
        public Guid UserId { get; set; }
        public Membership Membership { get; set; }
        public Guid MembershipId { get; set; }
        public bool IsDeleted { get ; set ; }
    }
}
