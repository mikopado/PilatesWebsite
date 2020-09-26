using System;
using System.Text.Json.Serialization;

namespace PilatesWebApi.Domain.Models
{
    public class User : DatedEntity, IDeletable
    {
        public Guid Id { get; set; }
        public string Email { get; set; }   
        public bool IsDeleted { get ; set ; }
        public Member Member { get; set; }
    }
}
