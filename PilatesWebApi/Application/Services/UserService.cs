using PilatesWebApi.Domain.Models;
using PilatesWebApi.Infrastructure.DAL.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PilatesWebApi.Application.Services
{
    public class UserService : IUserService
    {
        private readonly IUnitOfWork _uow;
        private IRepository<User> _repository;
        public UserService(IUnitOfWork unitOfWork)
        {
            _uow = unitOfWork;
            _repository = _uow.Repository<User>();
        }

        public async Task<User> Get(Guid Id)
        {
            return await _repository.GetAsync(Id);
        }
    }
}
