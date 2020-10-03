using PilatesWebApi.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PilatesWebApi.Application.DTO.Responses
{
    public class ClassCalendarResponse
    {
        public Guid Id { get; set; }
        public ClassType Type { get; set; }
        public Level Level { get; set; }
        public DayOfWeek WeekDay { get; set; }
        public TeacherResponse Teacher { get; set; }
        public TimeSpan StartingTime { get; set; }
        public TimeSpan EndingTime   { get; set; }
        public string Room { get; set; }
    }
}
