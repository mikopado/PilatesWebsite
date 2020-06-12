using PilatesWebApi.Domain.Models;
using System;

namespace PilatesWebApi.Application.DTO.Responses
{
    public class ClassResponse
    {
        public Guid Id { get; set; }
        public ClassType Type { get; set; }
        public Level Level { get; set; }
        public DateTime StartingTime { get; set; }
        public DateTime EndingTime { get; set; }
        public string Room { get; set; }
    }
}
