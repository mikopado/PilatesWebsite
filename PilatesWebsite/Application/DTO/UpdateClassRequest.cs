using PilatesWebsite.Models;
using System;

namespace PilatesWebsite.Services
{
    public class UpdateClassRequest
    {
        public ClassType Type { get; set; }
        public Guid TeacherId { get; set; }
        public Level Level { get; set; }
        public string Room { get; set; }
        public DateTime StartingTime { get; set; }
        public DateTime EndingTime { get; set; }
    }
}