using AutoMapper;
using PilatesWebsite.Application.DTO;
using PilatesWebsite.Application.DTO.Requests;
using PilatesWebsite.Application.DTO.Responses;
using PilatesWebsite.Domain.Models;
using System;


namespace PilatesWebsite.Application.Mapping
{
    public class Automapping : Profile
    {
        public Automapping()
        {
            CreateMap<AddClassRequest, Class>();
            CreateMap<UpdateClassRequest, Class>();
            CreateMap<Class, ClassResponseWithTeacher>();
            CreateMap<Class, ClassResponse>();
            CreateMap<Teacher, TeacherResponse>();
        }        
    }
}
