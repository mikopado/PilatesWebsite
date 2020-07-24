using AutoMapper;
using PilatesWebApi.Application.DTO.Requests;
using PilatesWebApi.Application.DTO.Responses;
using PilatesWebApi.Domain.Models;
using System.Collections.Generic;
using System.Linq;

namespace PilatesWebApi.Application.Mapping
{
    public class Automapping : Profile
    {
        public Automapping()
        {
            CreateMap<ClassRequest, Class>();
            CreateMap<UpdateClassRequest, Class>();
            CreateMap<Class, ClassResponseWithTeacher>();
            CreateMap<Class, ClassResponse>();
            CreateMap<Teacher, TeacherResponse>();
            CreateMap<Membership, MembershipResponse>();
            CreateMap<TeacherRequest, Teacher>();
            CreateMap<MembershipRequest, Membership>();
            CreateMap<Class, ClassCalendarResponse>();
            CreateMap<ClassRequest, ClassCalendar>();
            CreateMap<Class, ClassCalendar>()
                .ForMember(c => c.ClassId, opt => opt.MapFrom(o => o.Id))
                .ForAllOtherMembers(i => i.Ignore());
        }
    }
}
