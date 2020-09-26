using AutoMapper;
using Microsoft.AspNetCore.Routing.Constraints;
using PilatesWebApi.Application.DTO.Requests;
using PilatesWebApi.Application.DTO.Responses;
using PilatesWebApi.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

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
            CreateMap<ClassCalendar, ClassResponse>();
            CreateMap<Teacher, TeacherResponse>();
            CreateMap<Membership, MembershipResponse>();
            CreateMap<TeacherRequest, Teacher>();
            CreateMap<MembershipRequest, Membership>();
            CreateMap<Class, ClassCalendarResponse>()
                .ForMember(c => c.ClassId, opt => opt.MapFrom(o => o.Id))
                .ForMember(c => c.StartingTime, opt => opt.MapFrom((src, dest) => { return src.ClassCalendars?.Any() ?? false ? src.ClassCalendars.First().StartingTime : default; }))
                .ForMember(c => c.EndingTime, opt => opt.MapFrom((src, dest) => { return src.ClassCalendars?.Any() ?? false ? src.ClassCalendars.First().EndingTime : default; }));
            CreateMap<ClassRequest, ClassCalendar>();
            CreateMap<Class, ClassCalendar>()
                .ForMember(c => c.ClassId, opt => opt.MapFrom(o => o.Id))
                .ForAllOtherMembers(i => i.Ignore());
            CreateMap<RegisterUserRequest, User>();
            //CreateMap<User, Member>()
            //    .ForMember(m => m.User, opt => opt.MapFrom(u => u))
            //    .ForAllOtherMembers(i => i.Ignore());
            //CreateMap<User, UserResponse>();
            CreateMap<Member, MemberResponse>();
            CreateMap<User, UserResponse>();
            CreateMap<Membership, MembershipResponse>();

        }
    }

}
