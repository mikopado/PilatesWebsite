using System;
using System.Collections;
using System.Collections.Generic;

namespace PilatesWebsite.Models
{
    public class Teacher
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public ICollection<Class> Classes { get; set; }
    }
}