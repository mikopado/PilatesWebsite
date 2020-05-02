using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PilatesWebsite.Models
{
    public class Membership : DatedEntity, IDeletable
    {
        public Guid Id { get; set; }
        public MembershipType Type { get; set; }
        public ClassType ClassType { get; set; }

        public ICollection<Member> Members{ get; set; }
        public bool IsDeleted { get ; set ; }
    }
}
