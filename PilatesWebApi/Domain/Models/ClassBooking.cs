using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace PilatesWebApi.Domain.Models
{
    public class ClassBooking : DatedEntity, IDeletable
    {
        public Guid Id { get; set; }
        public Guid MemberId { get; set; }
        public Member Member { get; set; }
        public Guid ClassId { get; set; }
        public Class Class { get; set; }
        public DateTime Date { get; set; }
        public bool IsDeleted { get; set; }

    }
}
