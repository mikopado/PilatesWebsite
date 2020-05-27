﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PilatesWebsite.Domain.Models
{
    public class User : DatedEntity, IDeletable
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public bool IsDeleted { get ; set ; }

        public Member Member { get; set; }
    }
}
