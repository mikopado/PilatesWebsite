using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PilatesWebApi.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PilatesWebApi.Infrastructure.DAL.Configurations
{
    public class ClassBookingConfiguration : IEntityTypeConfiguration<ClassBooking>
    {
        public void Configure(EntityTypeBuilder<ClassBooking> builder)
        {
            builder.HasOne(cl => cl.Class)
                .WithMany(t => t.ClassBookings)
                .HasForeignKey(c => c.ClassId)
                .IsRequired();

            builder.HasOne(m => m.Member)
               .WithMany(t => t.ClassBookings)
               .HasForeignKey(m => m.MemberId)
               .IsRequired();

            // Filter all removed entries when query database
            builder.HasQueryFilter(p => !p.IsDeleted);

        }
    }
}
