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
using System.Threading.Tasks;

namespace PilatesWebApi.Application.Services
{
    public class UserService : IUserService
    {
        private readonly IUnitOfWork _uow;
        private IRepository<User> _userRepository;
        private IRepository<Member> _memberRepository;
        private IRepository<ClassBooking> _classBookingRepository;
        private IRepository<MemberMembership> _memberMembershipRepository;
        private readonly IMapper _mapper;

        public UserService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _uow = unitOfWork;
            _userRepository = _uow.Repository<User>();
            _memberRepository = _uow.Repository<Member>();
            _classBookingRepository = _uow.Repository<ClassBooking>();
            _memberMembershipRepository = _uow.Repository<MemberMembership>();
            _mapper = mapper;
        }

        public async Task<UserMemberResponse> GetAsync(Guid id)
        {
            var result = new UserMemberResponse();
            var member = await _memberRepository
                .With(m => m.User)
                .FirstOrDefaultAsync(u => u.UserId == id);
            if (member is null) 
            {
                var user = await _userRepository.GetAsync(id);
                if(user is null) throw new NotFoundException($"Resource with id: {id} cannot be found.");
                var userResponse = _mapper.Map<UserResponse>(user);
                result.User = userResponse;
                return result;
            }

            result.Member = _mapper.Map<MemberResponse>(member);
            result.User = _mapper.Map<UserResponse>(member.User);
            var memberships = await _memberMembershipRepository.With(m => m.Membership)
                .Where(m => m.MemberId == member.Id)
                .Select(m => m)
                .ToListAsync();
            result.Membership = _mapper.Map<MembershipResponse>(memberships.FirstOrDefault());
           var classes = await _classBookingRepository.With(c => c.Class, cl => cl.Class.ClassCalendars, t => t.Class.Teacher)
                .Where(x => x.MemberId == member.Id)
                .Select(cl => cl)
                .ToListAsync();            
            result.Classes = _mapper.Map<IEnumerable<ClassBookingResponse>>(classes);

            return result;
        }

        public async Task RegisterUserAsync(RegisterUserRequest userRequest)
        {
            var user = _mapper.Map<User>(userRequest);
            await _userRepository.AddAsync(user);
            await _uow.SaveAsync();
        }

        public async Task<ClassBookingResponse> GetBookedClassAsync(Guid bookingId)
        {
            var bookedClass = await _uow.Repository<ClassBooking>()
                .With(c => c.Class, c => c.Class.ClassCalendars, c => c.Class.Teacher)
                .FirstOrDefaultAsync(c => c.Id == bookingId);
            if (bookedClass is null) throw new NotFoundException($"The resource with id: {bookingId} cannot been found.");
            return _mapper.Map<ClassBookingResponse>(bookedClass);
        }

        public async Task<IEnumerable<UserForAdminResponse>> GetUsersAsync()
        {
            var users = await _userRepository.GetEntitiesAsync();
            return _mapper.Map<IEnumerable<UserForAdminResponse>>(users);
        }
    }
}
