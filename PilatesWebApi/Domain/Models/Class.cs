using System;

namespace PilatesWebApi.Domain.Models
{
    public class Class : DatedEntity, IDeletable
    {
        public Guid Id { get; set; }
        public ClassType Type { get; set; }
        public Level Level{ get; set; }
        public Guid TeacherId { get; set; }
        public Teacher Teacher{ get; set; }
        public DayOfWeek WeekDay { get; set; }
        public TimeSpan StartingTime { get; set; }
        public TimeSpan EndingTime { get; set; }
        public string Room { get; set; }
        public bool IsDeleted { get ; set ; }
    }
}
