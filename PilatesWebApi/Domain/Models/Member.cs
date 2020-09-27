using Microsoft.VisualBasic;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace PilatesWebApi.Domain.Models
{
    public class Member : DatedEntity, IDeletable
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime Dob { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public User User { get; set; }
        public Guid UserId { get; set; }       
        public bool IsDeleted { get ; set ; }

        public ICollection<ClassBooking> ClassBookings { get; set;  }
        public ICollection<MemberMembership> Memberships { get; set; }
    }
}
