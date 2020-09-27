using System;
using System.Collections.Generic;

namespace PilatesWebApi.Domain.Models
{
    public class Membership : DatedEntity, IDeletable
    {
        public Guid Id { get; set; }
        public MembershipType Type { get; set; }
        public ClassType ClassType { get; set; }
        public int DurationInDay { get; set; }
        public decimal Price { get; set; }

        public ICollection<MemberMembership> Members{ get; set; }
        public bool IsDeleted { get ; set ; }
    }
}
