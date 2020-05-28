using PilatesWebsite.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PilatesWebsite.Application.DTO.Responses
{
    public class ClassResponseWithTeacher
    {
        public Guid Id { get; set; }
        public ClassType Type { get; set; }
        public Level Level { get; set; }
        public TeacherResponse Teacher { get; set; }
        public DateTime StartingTime { get; set; }
        public DateTime EndingTime { get; set; }
        public string Room { get; set; }
    }
}
