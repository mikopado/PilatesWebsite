using System;

namespace PilatesWebApi.Application.DTO.Responses
{
    public class TeacherResponse
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
