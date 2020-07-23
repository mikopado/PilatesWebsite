using PilatesWebApi.Domain.Models;
using System;
using System.Collections.Generic;

namespace PilatesWebApi.Application.DTO.Requests
{
    public class AddClassesRequest
    {
        public List<ClassRequest> Classes { get; set; }       
    }
}
