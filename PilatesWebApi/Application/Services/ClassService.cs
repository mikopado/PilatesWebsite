using AutoMapper;
using Microsoft.EntityFrameworkCore;
using PilatesWebApi.Application.DTO.Requests;
using PilatesWebApi.Application.DTO.Responses;
using PilatesWebApi.Application.Exceptions;
using PilatesWebApi.Domain.Models;
using PilatesWebApi.Infrastructure.DAL.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace PilatesWebApi.Application.Services
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

        public async Task AddClassesAsync(AddClassesRequest request)
        {
            var classesToAdd = _mapper.Map<IEnumerable<Class>>(request.Classes);
            await _repository.AddMultipleAsync(classesToAdd);
            await _uow.SaveAsync();
        }

        public async Task DeleteClassAsync(Guid id)
        {
            var classToDelete = await FindClassAsync(id);
            _repository.DeleteAsync(classToDelete);
            await _uow.SaveAsync();
        }

        public async Task<IEnumerable<ClassResponse>> GetAllClassesAsync()
        {
            var classes = await _repository.GetEntitiesAsync();
            return _mapper.Map<IEnumerable<ClassResponse>>(classes);
        }

        public async Task<ClassResponse> GetClassAsync(Guid id)
        {
            var cls = await FindClassAsync(id);
            return _mapper.Map<ClassResponse>(cls);
        }

        public async Task UpdateClassAsync(Guid id, UpdateClassRequest request)
        {
            var originalClass = await FindClassAsync(id);
            _mapper.Map(request, originalClass);
            _repository.Update(originalClass);
            await _uow.SaveAsync();
        }
        public async Task<IEnumerable<ClassResponse>> GetClassesAsync(Expression<Func<Class, bool>> predicate)
        {
            var classes = await _repository.FindAsync(predicate);
            if (classes is null) throw new NotFoundException("Resource cannot be found");
            return _mapper.Map<IEnumerable<ClassResponse>>(classes);
        }

        //public async Task<IEnumerable<ClassResponse>> GetTimetableAsync(DateTime start, DateTime end, Func<Class, bool> predicate = null)
        //{
        //    var timetable = await _repository.FindAsync(x => x.StartingTime >= start && x.EndingTime <= end);
        //    if (timetable is null) throw new Exception("An error occured while retrieving resources.");
        //    if (predicate is null) return _mapper.Map<IEnumerable<ClassResponse>>(timetable);
        //    var filteredTimetable = timetable.Where(predicate);
        //    return _mapper.Map<IEnumerable<ClassResponse>>(filteredTimetable);
        //}

        public async Task<ClassResponseWithTeacher> GetClassWithTeacherAsync(Guid id)
        {
            var classWithTeacher = await _repository.With(x => x.Teacher).FirstOrDefaultAsync(x => x.Id == id);
            if (classWithTeacher is null) throw new NotFoundException($"Resource with id: {id} cannot be found.");
            return _mapper.Map<ClassResponseWithTeacher>(classWithTeacher);
        }

        public async Task<IEnumerable<ClassResponseWithTeacher>> GetClassesWithTeacherAsync()
        {
            var classesWithTeacher = await _repository.With(x => x.Teacher).ToListAsync();
            if (classesWithTeacher is null) throw new Exception("An error occured while retrieving resources.");
            return _mapper.Map<IEnumerable<ClassResponseWithTeacher>>(classesWithTeacher);
        }

        private async Task<Class> FindClassAsync(Guid id)
        {
            var cls = await _repository.GetAsync(id);
            if (cls is null) throw new NotFoundException($"The resource with id: {id} cannot been found.");
            return cls;
        }

        public async Task<IEnumerable<ClassCalendarResponse>> GetWeeklyTimetableAsync()
        {
            var classes = await _repository.GetEntitiesAsync();
            return _mapper.Map<IEnumerable<ClassCalendarResponse>>(classes);

        }
    }
}
