using PilatesWebApi.Application.DTO.Requests;
using PilatesWebApi.Application.DTO.Responses;
using PilatesWebApi.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PilatesWebApi.Application.Services
{
    public interface ITeacherService
    {
        Task<IEnumerable<TeacherResponse>> GetTeachersAsync();
        Task AddTeachersAsync(AddTeachersRequest teacher);
    }
}
