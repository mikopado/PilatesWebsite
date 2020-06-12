using System;
using System.Collections.Generic;

namespace PilatesWebApi.Domain.Models
{
    public class Teacher : IDeletable
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public bool IsDeleted { get ; set ; }

        public ICollection<Class> Classes { get; set; }
    }
}