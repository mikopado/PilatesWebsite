using AutoMapper;
using Microsoft.EntityFrameworkCore;
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
        public async Task<IEnumerable<MemberMembershipResponse>> GetMembershipsMemberAsync()
        {
            var memberMemberships = await _uow.Repository<MemberMembership>()
                .With(m => m.Member, ms => ms.Membership)
                .ToListAsync();
            if (memberMemberships is null) throw new Exception();
            if (!memberMemberships.Any()) return Enumerable.Empty<MemberMembershipResponse>();
            var members = memberMemberships.Select(m => m.Member);
            return members.Join(memberMemberships,
                mem => mem.Id, mb => mb.MemberId,
                (mem, mb) =>
                new MemberMembershipResponse
                {
                    Id = mb.Id,
                    UserId = mem.UserId,
                    ClassType = mb.Membership.ClassType,
                    CreatedAt = mb.CreatedAt,
                    ExpirationTime = mb.ExpirationTime,
                    MembershipType = mb.Membership.Type,
                    Price = mb.Membership.Price
                });
        }
    }
}
