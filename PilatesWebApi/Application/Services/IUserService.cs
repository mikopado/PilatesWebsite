using PilatesWebApi.Domain.Models;
using System;
using System.Threading.Tasks;

namespace PilatesWebApi.Application.Services
{
    public interface IUserService
    {
        Task<User> Get(Guid Id);
    }
}