using AutoMapper;
using PilatesWebApi.Application.DTO.Requests;
using PilatesWebApi.Application.DTO.Responses;
using PilatesWebApi.Domain.Models;
using PilatesWebApi.Infrastructure.DAL.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PilatesWebApi.Application.Services
{
    public class MembershipService : IMembershipService
    {
        private readonly IUnitOfWork _uow;
        private IMapper _mapper;
        private IRepository<Membership> _repository;

        public MembershipService(IUnitOfWork uow, IMapper mapper)
        {
            _uow = uow;
            _mapper = mapper;
            _repository = _uow.Repository<Membership>();
        }

        public async Task AddMembershipsAsync(CreateMembershipsRequest request)
        {
            var newMemberships = _mapper.Map<IEnumerable<Membership>>(request.Memberships);
            await _repository.AddMultipleAsync(newMemberships);
            await _uow.SaveAsync();
        }

        public async Task<IEnumerable<MembershipResponse>> GetMembershipsAsync()
        {
            var memberships = await _repository.GetEntitiesAsync();
            return _mapper.Map<IEnumerable<MembershipResponse>>(memberships);
        }
    }
}
