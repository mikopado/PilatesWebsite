using PilatesWebApi.Domain.Models;
using System;


namespace PilatesWebApi.Application.DTO.Responses
{
    public class ClassBookedResponse
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public ClassType Type { get; set; }
        public Level Level { get; set; }
        public TeacherResponse Teacher { get; set; }
        public TimeSpan StartingTime { get; set; }
        public TimeSpan EndingTime { get; set; }
        public string Room { get; set; }
        public DateTime Date { get; set; }
        public DateTime BookedAt { get; set; }
    }
}
