using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PilatesWebsite.Domain.Models
{
    public class Class : DatedEntity, IDeletable
    {
        public Guid Id { get; set; }
        public ClassType Type { get; set; }
        public Level Level{ get; set; }
        public Teacher Teacher{ get; set; }
        public DateTime StartingTime { get; set; }
        public DateTime EndingTime { get; set; }
        public string Room { get; set; }
        public bool IsDeleted { get ; set ; }
    }
}
