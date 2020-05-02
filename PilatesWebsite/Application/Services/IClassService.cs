using PilatesWebsite.Application.DTO;
using PilatesWebsite.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PilatesWebsite.Services
{
    public interface IClassService
    {
        Task<IEnumerable<Class>> GetAllClassesAsync();
        Task<Class> GetClassAsync(Guid id);
        Task AddClassAsync(AddClassRequest request);
        Task DeleteClassAsync(DeleteClassRequest request);
        Task UpdateClassAsync(UpdateClassRequest request);
    }
}
