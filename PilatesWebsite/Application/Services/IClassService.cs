using PilatesWebsite.Application.DTO;
using PilatesWebsite.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace PilatesWebsite.Services
{
    public interface IClassService
    {
        Task<IEnumerable<Class>> GetAllClassesAsync();
        Task<Class> GetClassAsync(Guid id);
        Task AddClassAsync(AddClassRequest request);
        Task DeleteClassAsync(Guid id);
        void UpdateClass(Guid id, UpdateClassRequest request);
        Task<IEnumerable<Class>> GetClassesAsync(Expression<Func<Class, bool>> predicate);
        Task<IEnumerable<Class>> GetTimetable(DateTime start, DateTime end, Func<Class, bool> predicate = null);
    }
}
