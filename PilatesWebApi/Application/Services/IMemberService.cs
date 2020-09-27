using PilatesWebApi.Application.DTO.Requests;
using System.Threading.Tasks;

namespace PilatesWebApi.Application.Services
{
    public interface IMemberService
    {
        Task AddMemberAsync(RegisterMemberRequest request);
    }
}
