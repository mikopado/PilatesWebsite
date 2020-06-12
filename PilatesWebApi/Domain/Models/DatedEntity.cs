using System;

namespace PilatesWebApi.Domain.Models
{
    public abstract class DatedEntity
    {
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
