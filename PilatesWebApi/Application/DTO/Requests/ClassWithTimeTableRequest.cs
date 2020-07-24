using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PilatesWebApi.Application.DTO.Requests
{
    public class ClassWithTimeTableRequest
    {
        public Level Level { get; set; }
        public Guid TeacherId { get; set; }
        public ClassType Type { get; set; }
        public string Room { get; set; }
        public DayOfWeek WeekDay { get; set; }
        public TimeSpan StartingTime { get; set; }
        public TimeSpan EndingTime { get; set; }
    }
}
