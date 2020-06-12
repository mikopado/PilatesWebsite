using System;

namespace PilatesWebApi.Domain.Models
{
    public class User : DatedEntity, IDeletable
    {
        public Guid Id { get; set; }
        public string Email { get; set; }
        // TODO How to handle password. How to store it and if we need to keep as property
        public string Password { get; set; }
        public bool IsDeleted { get ; set ; }

        public Member Member { get; set; }
    }
}
