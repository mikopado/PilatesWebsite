using System;

namespace PilatesWebApi.Domain.Models
{
    public class Member : IDeletable
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public User User { get; set; }
        public Guid? UserId { get; set; }
        public Membership Membership { get; set; }
        public Guid MembershipId { get; set; }
        public bool IsDeleted { get ; set ; }
    }
}
