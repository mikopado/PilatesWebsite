using System;

namespace PilatesWebsite.Domain.Models
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
