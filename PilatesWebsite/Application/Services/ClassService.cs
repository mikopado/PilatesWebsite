using PilatesWebsite.Application.DTO;
using PilatesWebsite.DAL.Repositories;
using PilatesWebsite.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PilatesWebsite.Services
{
    public class ClassService : IClassService
    {
        private readonly IUnitOfWork _uow;
        public ClassService(IUnitOfWork unitOfWork)
        {
            _uow = unitOfWork;
        }

        public Task AddClassAsync(AddClassRequest request)
        {
            throw new NotImplementedException();
        }

        public Task DeleteClassAsync(DeleteClassRequest request)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Class>> GetAllClassesAsync()
        {
            throw new NotImplementedException();
        }

        public Task<Class> GetClassAsync(Guid id)
        {
            throw new NotImplementedException();
        }

        public Task UpdateClassAsync(UpdateClassRequest request)
        {
            throw new NotImplementedException();
        }
    }
}
