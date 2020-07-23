using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PilatesWebApi.Application.DTO.Requests
{
    public class AddTeachersRequest
    {
        public List<TeacherRequest> Teachers { get; set; }        
    }
}
