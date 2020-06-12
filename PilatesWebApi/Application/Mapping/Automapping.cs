using AutoMapper;
using PilatesWebApi.Application.DTO.Requests;
using PilatesWebApi.Application.DTO.Responses;
using PilatesWebApi.Domain.Models;


namespace PilatesWebApi.Application.Mapping
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
