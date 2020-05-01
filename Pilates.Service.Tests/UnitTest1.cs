using Microsoft.EntityFrameworkCore;
using PilatesWebsite.DAL;
using PilatesWebsite.DAL.Repositories;
using PilatesWebsite.Models;
using System;
using Xunit;

namespace Pilates.Service.Tests
{
    public class UnitTest1
    {
        [Fact]
        public async void Test1()
        {
            var teacher = new Teacher { Id = Guid.NewGuid(), FirstName = "John", LastName = "Moll" };
            var cls = new Class { Id = Guid.NewGuid(), Level = Level.Advanced, Teacher = teacher, Type = ClassType.Yoga };
            var options = new DbContextOptionsBuilder<PilatesDbContext>();
            options.UseNpgsql("Host=localhost;Database=pilates;Username=postgres;Password=postgres");
            var db = new PilatesDbContext(options.Options);
            db.Teachers.Add(teacher);
            await db.SaveChangesAsync();

            db.Classes.Add(cls);
            var r = await db.SaveChangesAsync();

            Assert.Equal(1, r);

        }
    }
}
