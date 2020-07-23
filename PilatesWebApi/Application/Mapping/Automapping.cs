using AutoMapper;
using PilatesWebApi.Application.DTO.Requests;
using PilatesWebApi.Application.DTO.Responses;
using PilatesWebApi.Domain.Models;
using System.Collections.Generic;

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
        }        
    }
}
