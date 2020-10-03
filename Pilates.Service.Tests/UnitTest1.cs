using Microsoft.EntityFrameworkCore;
using PilatesWebApi.Domain.Models;
using PilatesWebApi.Infrastructure.DAL;
using PilatesWebApi.Infrastructure.DAL.Repositories;
using System;
using System.Linq;
using Xunit;

namespace Pilates.Service.Tests
{
    public class UnitTest1
    {
        [Fact]
        public async void TestAdd()
        {
            var teacher = new Teacher { Id = Guid.NewGuid(), FirstName = "Pam", LastName = "Caling" };
            var cls = new Class { Id = Guid.NewGuid(), Level = Level.Advanced, Teacher = teacher, Type = ClassType.Yoga };
            var options = new DbContextOptionsBuilder<PilatesDbContext>();
            options.UseNpgsql("Host=localhost;Database=pilates;Username=postgres;Password=postgres");
            var db = new PilatesDbContext(options.Options);
            db.Teachers.Add(teacher);

            db.Classes.Add(cls);
            var r = await db.SaveChangesAsync();

            Assert.Equal(1, r);

        }

        [Fact]
        public async void TestRemove()
        {
            var options = new DbContextOptionsBuilder<PilatesDbContext>();
            options.UseNpgsql("Host=localhost;Database=pilates;Username=postgres;Password=postgres");
            var db = new PilatesDbContext(options.Options);
            var uow = new UnitOfWork(db);

            var classes = await uow.Repository<Class>().GetEntitiesAsync();
            var cls = classes.ToArray()[0];

            uow.Repository<Class>().Delete(cls);
            var r = await uow.SaveAsync();
            Assert.Equal(1, r);

        }
    }
}
