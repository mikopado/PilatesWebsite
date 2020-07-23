using PilatesWebApi.Domain.Models;
using System;

namespace PilatesWebApi.Application.DTO.Requests
{
    public class ClassRequest
    {
        public Level Level { get; set; }
        public Guid TeacherId { get; set; }
        public ClassType Type { get; set; }
        public string Room { get; set; }
        public DateTime StartingTime { get; set; }
        public DateTime EndingTime { get; set; }
    }
}