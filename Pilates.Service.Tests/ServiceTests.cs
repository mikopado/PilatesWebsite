using PilatesWebApi.Application.DTO.Requests;
using PilatesWebApi.Application.Services;
using PilatesWebApi.Domain.Models;
using System;
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
            //var cls = new AddClassesRequest { Level = Level.Beginner, Type = ClassType.Pilates, TeacherId = Guid.Parse("7c4aa5e3-4bfc-438e-a26e-6ff85d93b1cc"), StartingTime = DateTime.Now, EndingTime = DateTime.Now };
            


            //db.Classes.Add(cls);
            //var r = await db.SaveChangesAsync();

            //Assert.Equal(1, r);

        }
    }
}
