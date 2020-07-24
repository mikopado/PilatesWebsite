using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PilatesWebApi.Application.DTO.Requests
{
    public class AddClassWithTimetableRequest
    {
        public List<ClassWithTimeTableRequest> Classes { get; set; }
    }
}
