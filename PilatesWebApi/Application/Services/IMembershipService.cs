using PilatesWebApi.Application.DTO.Requests;
using PilatesWebApi.Application.DTO.Responses;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PilatesWebApi.Application.Services
{
    public interface IMembershipService
    {
        Task<IEnumerable<MembershipResponse>> GetMembershipsAsync();
        Task AddMembershipsAsync(CreateMembershipsRequest request);
        Task<IEnumerable<MemberMembershipResponse>> GetMembershipsMemberAsync();

    }
}
