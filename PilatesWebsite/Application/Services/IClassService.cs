using PilatesWebsite.Application.DTO;
using PilatesWebsite.Application.DTO.Requests;
using PilatesWebsite.Application.DTO.Responses;
using PilatesWebsite.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace PilatesWebsite.Application.Services
{
    public interface IClassService
    {
        Task<IEnumerable<ClassResponse>> GetAllClassesAsync();
        Task<ClassResponse> GetClassAsync(Guid id);
        Task AddClassAsync(AddClassRequest request);
        Task DeleteClassAsync(Guid id);
        Task UpdateClassAsync(Guid id, UpdateClassRequest request);
        Task<IEnumerable<ClassResponse>> GetClassesAsync(Expression<Func<Class, bool>> predicate);
        Task<IEnumerable<ClassResponse>> GetTimetableAsync(DateTime start, DateTime end, Func<Class, bool> predicate = null);
        Task<ClassResponseWithTeacher> GetClassWithTeacherAsync(Guid id);
        Task<IEnumerable<ClassResponseWithTeacher>> GetClassesWithTeacherAsync();
    }
}
