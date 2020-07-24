using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PilatesWebApi.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PilatesWebApi.Infrastructure.DAL.Configurations
{
    public class ClassCalendarConfiguration : IEntityTypeConfiguration<ClassCalendar>
    {
        public void Configure(EntityTypeBuilder<ClassCalendar> builder)
        {
            builder.HasOne(cl => cl.Class)
                .WithMany(t => t.ClassCalendars)
                .HasForeignKey(c => c.ClassId)
                .IsRequired();        

        }
    }
}
