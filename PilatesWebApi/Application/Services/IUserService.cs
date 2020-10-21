using PilatesWebApi.Domain.Models;
using System;
using PilatesWebApi.Application.DTO.Requests;
using System.Threading.Tasks;
using PilatesWebApi.Application.DTO.Responses;
using System.Collections.Generic;

namespace PilatesWebApi.Application.Services
{
    public interface IUserService
    {
        Task<UserMemberResponse> GetAsync(Guid Id);
        Task RegisterUserAsync(RegisterUserRequest userRequest);
        Task<ClassBookingResponse> GetBookedClassAsync(Guid bookingId);

    }
}