using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PilatesWebsite.Models
{
    public interface IDeletable
    {
        public bool IsDeleted { get; set; }
    }
}
