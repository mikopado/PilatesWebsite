using System;


namespace PilatesWebApi.Application.DTO.Requests
{
    public class ClassBookingRequest
    {
        public Guid ClassId { get; set; }
        public Guid UserId { get; set; }
        public DateTime Date { get; set; }
    }
}
