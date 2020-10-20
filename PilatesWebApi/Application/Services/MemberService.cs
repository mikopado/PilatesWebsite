using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;
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
    public class MemberService : IMemberService
    {
        private readonly IUnitOfWork _uow;
        private IMapper _mapper;
        private IRepository<Member> _memberRepository;

        public MemberService(IUnitOfWork uow, IMapper mapper)
        {
            _uow = uow;
            _mapper = mapper;
            _memberRepository = _uow.Repository<Member>();
        }

        public async Task AddMemberAsync(RegisterMemberRequest request)
        {
            try
            {
                var member = _mapper.Map<Member>(request);
                var entityMember = await _memberRepository.FindAsync(m => m.UserId == request.UserId);
                if (entityMember.Any())
                {
                    member.Id = entityMember.First().Id;
                    _memberRepository.Update(member);
                }
                else
                {
                    await _memberRepository.AddAsync(member);
                    await _uow.SaveAsync();
                    member.Id = (await _memberRepository.FindAsync(m => m.UserId == request.UserId)).First().Id;
                }
                var membership = await _uow.Repository<Membership>().GetAsync(request.MembershipId);
                var expirationTime = DateTime.Now.AddDays(membership.DurationInDay);
                await _uow.Repository<MemberMembership>().AddAsync(
                    new MemberMembership
                    {
                        MemberId = member.Id,
                        MembershipId = request.MembershipId,
                        ExpirationTime = expirationTime
                    }
                );
                await _uow.SaveAsync();
            }
            catch (Exception ex)
            {

                throw;
            }
        }        
    }
}
