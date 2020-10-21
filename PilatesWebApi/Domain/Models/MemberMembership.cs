using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PilatesWebApi.Domain.Models
{
    public class MemberMembership : DatedEntity, IDeletable 
    {
        public Guid Id { get; set; }
        public Guid MemberId { get; set; }
        public Member Member { get; set; }
        public Guid MembershipId { get; set; }
        public Membership Membership { get; set; }
        public DateTime ExpirationTime { get; set; }
        public bool IsDeleted { get ; set ; }
    }
}
