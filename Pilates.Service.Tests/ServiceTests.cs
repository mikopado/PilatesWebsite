using PilatesWebsite.Application.DTO;
using PilatesWebsite.Application.DTO.Requests;
using PilatesWebsite.DAL;
using PilatesWebsite.DAL.Repositories;
using PilatesWebsite.Models;
using PilatesWebsite.Services;
using System;
using System.Collections.Generic;
using System.Text;
using Xunit;

namespace Pilates.Service.Tests
{
    public class ServiceTests
    {
        private readonly IClassService _classService;
        public ServiceTests()
        {
            //_classService = new ClassService(new UnitOfWork(new PilatesDbContext()), );
        }
        [Fact]
        public async void TestAddClass()
        {
            var cls = new AddClassRequest { Level = Level.Beginner, Type = ClassType.Pilates, TeacherId = Guid.Parse("7c4aa5e3-4bfc-438e-a26e-6ff85d93b1cc"), StartingTime = DateTime.Now, EndingTime = DateTime.Now };
            


            //db.Classes.Add(cls);
            //var r = await db.SaveChangesAsync();

            //Assert.Equal(1, r);

        }
    }
}
