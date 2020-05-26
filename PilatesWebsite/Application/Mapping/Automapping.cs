using AutoMapper;
using PilatesWebsite.Application.DTO;
using PilatesWebsite.Application.DTO.Requests;
using PilatesWebsite.Application.DTO.Responses;
using PilatesWebsite.Models;
using PilatesWebsite.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PilatesWebsite.Application.Mapping
{
    public class Automapping : Profile
    {
        public Automapping()
        {
            // TODO move GUID generation to database
            CreateMap<AddClassRequest, Class>()
                .ForMember(c => c.Id, opt => opt.MapFrom(src => Guid.NewGuid()));
            CreateMap<UpdateClassRequest, Class>();
            CreateMap<Class, ClassResponseWithTeacher>();
            CreateMap<Class, ClassResponse>();
            CreateMap<Teacher, TeacherResponse>();
        }
    }
}
