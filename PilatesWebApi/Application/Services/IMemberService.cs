using PilatesWebApi.Application.DTO.Requests;
using PilatesWebApi.Application.DTO.Responses;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PilatesWebApi.Application.Services
{
    public interface IMemberService
    {
        Task AddMemberAsync(RegisterMemberRequest request);
    }
}
