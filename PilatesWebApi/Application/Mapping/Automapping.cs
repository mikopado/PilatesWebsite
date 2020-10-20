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
            CreateMap<Membership, MembershipResponse>()
                .ForMember(m => m.Days, opt => opt.MapFrom(o => o.DurationInDay));
            CreateMap<TeacherRequest, Teacher>();
            CreateMap<MembershipRequest, Membership>();
            CreateMap<Class, ClassCalendarResponse>()
                .ForMember(c => c.Id, opt => opt.MapFrom(o => o.Id))
                .ForMember(c => c.StartingTime, opt => opt.MapFrom((src, dest) => { return src.ClassCalendars?.Any() ?? false ? src.ClassCalendars.First().StartingTime : default; }))
                .ForMember(c => c.EndingTime, opt => opt.MapFrom((src, dest) => { return src.ClassCalendars?.Any() ?? false ? src.ClassCalendars.First().EndingTime : default; }));
            CreateMap<ClassRequest, ClassCalendar>();
            CreateMap<Class, ClassCalendar>()
                .ForMember(c => c.ClassId, opt => opt.MapFrom(o => o.Id))
                .ForAllOtherMembers(i => i.Ignore());
            CreateMap<RegisterUserRequest, User>();          
            CreateMap<Member, MemberResponse>();
            CreateMap<User, UserResponse>();
            CreateMap<User, UserForAdminResponse>();
            CreateMap<MemberMembership, MembershipResponse>()
                .ForMember(m => m.ClassType, opt => opt.MapFrom(o => o.Membership.ClassType))
                .ForMember(m => m.Type, opt => opt.MapFrom(o => o.Membership.Type))
                .ForMember(m => m.Price, opt => opt.MapFrom(o => o.Membership.Price))
                .ForMember(m => m.Days, opt => opt.MapFrom(o => o.Membership.DurationInDay));
            CreateMap<RegisterMemberRequest, Member>();
            CreateMap<ClassBooking, ClassBookingResponse>()
               .ForMember(c => c.Id, opt => opt.MapFrom(o => o.Id))
               .ForMember(c => c.Level, opt => opt.MapFrom(o => o.Class.Level))
               .ForMember(c => c.Type, opt => opt.MapFrom(o => o.Class.Type))
               .ForMember(c => c.Room, opt => opt.MapFrom(o => o.Class.Room))
               .ForMember(c => c.Teacher, opt => opt.MapFrom(o => o.Class.Teacher))
               .ForMember(c => c.StartingTime, opt => opt.MapFrom((src, dest) => { return src.Class.ClassCalendars?.Any() ?? false ? src.Class.ClassCalendars.First().StartingTime : default; }))
               .ForMember(c => c.EndingTime, opt => opt.MapFrom((src, dest) => { return src.Class.ClassCalendars?.Any() ?? false ? src.Class.ClassCalendars.First().EndingTime : default; }));
            CreateMap<ClassBooking, ClassBookedResponse>()
               .ForMember(c => c.BookedAt, opt => opt.MapFrom(o => o.CreatedAt))
               .ForMember(c => c.Id, opt => opt.MapFrom(o => o.Id))
               .ForMember(c => c.Level, opt => opt.MapFrom(o => o.Class.Level))
               .ForMember(c => c.Type, opt => opt.MapFrom(o => o.Class.Type))
               .ForMember(c => c.Room, opt => opt.MapFrom(o => o.Class.Room))
               .ForMember(c => c.Teacher, opt => opt.MapFrom(o => o.Class.Teacher))
               .ForMember(c => c.UserId, opt => opt.MapFrom(o => o.Member.UserId))
               .ForMember(c => c.StartingTime, opt => opt.MapFrom((src, dest) => { return src.Class.ClassCalendars?.Any() ?? false ? src.Class.ClassCalendars.First().StartingTime : default; }))
               .ForMember(c => c.EndingTime, opt => opt.MapFrom((src, dest) => { return src.Class.ClassCalendars?.Any() ?? false ? src.Class.ClassCalendars.First().EndingTime : default; })); ;


        }
    }

}
