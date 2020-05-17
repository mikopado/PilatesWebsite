using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using PilatesWebsite.Application.DTO;
using PilatesWebsite.DAL.Repositories;
using PilatesWebsite.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace PilatesWebsite.Services
{
    public class ClassService : IClassService
    {
        private readonly IUnitOfWork _uow;
        private IMapper _mapper;
        private IRepository<Class> _repository;
        public ClassService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _uow = unitOfWork;
            _mapper = mapper;
            _repository = _uow.Repository<Class>();
        }

        public async Task AddClassAsync(AddClassRequest request)
        {
            await _repository.AddAsync(_mapper.Map<Class>(request));
        }

        public async Task DeleteClassAsync(Guid id)
        {
            var repo = _uow.Repository<Class>();
            var cls = await repo.GetAsync(id);
            if (cls is null) throw new Exception($"An error has occurred while retrieving the resource with id: {id}.");
            await _repository.DeleteAsync(cls);
        }

        public async Task<IEnumerable<Class>> GetAllClassesAsync()
        {
            return await _repository.GetEntitiesAsync();
        }

        public async Task<Class> GetClassAsync(Guid id)
        {
            return await _repository.GetAsync(id);
        }

        public void UpdateClass(Guid id, UpdateClassRequest request)
        {
            var cls = _mapper.Map<Class>(request);
            cls.Id = id;
            _repository.Update(cls);
        }
        public async Task<IEnumerable<Class>> GetClassesAsync(Expression<Func<Class, bool>> predicate)
        {
            return await _repository.FindAsync(predicate);
        }

        public async Task<IEnumerable<Class>> GetTimetable(DateTime start, DateTime end, Func<Class, bool> predicate = null)
        {
            var timetable = await _repository.FindAsync(x => x.StartingTime >= start && x.EndingTime <= end);
            if (predicate is null) return timetable;
            return timetable.Where(predicate);

        }

    }
}
