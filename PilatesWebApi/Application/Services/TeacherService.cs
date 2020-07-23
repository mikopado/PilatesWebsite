using AutoMapper;
using PilatesWebApi.Application.DTO.Requests;
using PilatesWebApi.Application.DTO.Responses;
using PilatesWebApi.Domain.Models;
using PilatesWebApi.Infrastructure.DAL.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PilatesWebApi.Application.Services
{
    public class TeacherService : ITeacherService
    {
        private readonly IUnitOfWork _uow;
        private IMapper _mapper;
        private IRepository<Teacher> _repository;

        public TeacherService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _uow = unitOfWork;
            _mapper = mapper;
            _repository = _uow.Repository<Teacher>();
        }

        public async Task AddTeachersAsync(AddTeachersRequest request)
        {
            var newTeachers = _mapper.Map<IEnumerable<Teacher>>(request?.Teachers);
            await _repository.AddMultipleAsync(newTeachers);
            await _uow.SaveAsync();
        }

        public async Task<IEnumerable<TeacherResponse>> GetTeachersAsync()
        {
            var teachers = await _repository.GetEntitiesAsync();
            return _mapper.Map<IEnumerable<TeacherResponse>>(teachers);
        }
    }
}
