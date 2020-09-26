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
        private readonly IMapper _mapper;

        public UserService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _uow = unitOfWork;
            _userRepository = _uow.Repository<User>();
            _memberRepository = _uow.Repository<Member>();
            _classBookingRepository = _uow.Repository<ClassBooking>();
            _mapper = mapper;
        }

        public async Task<UserMemberResponse> GetAsync(Guid id)
        {
            var result = new UserMemberResponse();
            var userDetails = await _memberRepository
                .With(m => m.User, mb => mb.Membership)
                .FirstOrDefaultAsync(u => u.UserId == id);
            if (userDetails is null) 
            {
                var user = await _userRepository.GetAsync(id);
                if(user is null) throw new NotFoundException($"Resource with id: {id} cannot be found.");
                var userResponse = _mapper.Map<UserResponse>(user);
                result.User = userResponse;
                return result;
            }

            result.Member = _mapper.Map<MemberResponse>(userDetails);
            result.Membership = _mapper.Map<MembershipResponse>(userDetails.Membership);
            result.User = _mapper.Map<UserResponse>(userDetails.User);
            var classes = await _classBookingRepository.With(c => c.Class, cl => cl.Class.ClassCalendars, t => t.Class.Teacher)
                .Where(x => x.MemberId == userDetails.Id)
                .Select(cl => cl.Class)
                .ToListAsync();            
            result.Classes = _mapper.Map<IEnumerable<ClassCalendarResponse>>(classes);

            return result;
        }

        public async Task RegisterUserAsync(RegisterUserRequest userRequest)
        {
            var user = _mapper.Map<User>(userRequest);
            await _userRepository.AddAsync(user);
            await _uow.SaveAsync();
        }
    }
}
