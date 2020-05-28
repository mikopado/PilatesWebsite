using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PilatesWebsite.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PilatesWebsiteInfrastructure.DAL.Configurations
{
    public class MemberConfiguration : IEntityTypeConfiguration<Member>
    {
        public void Configure(EntityTypeBuilder<Member> builder)
        {
            builder.HasOne(m => m.Membership)
                .WithMany(ms => ms.Members)
                .HasForeignKey(m => m.MembershipId);

            builder.HasOne(m => m.User)
                .WithOne(u => u.Member)
                .HasForeignKey<Member>(m => m.UserId);

            builder.Property(x => x.FirstName)
                .IsRequired();

            builder.Property(x => x.LastName)
                .IsRequired();

            builder.Property(x => x.Address)
                .IsRequired();

            builder.Property(x => x.City)
                .IsRequired();

            builder.Property(x => x.Age)
                .IsRequired();

            builder.Property(x => x.Email)
                .IsRequired();

            // Filter all removed entries when query database
            builder.HasQueryFilter(p => !p.IsDeleted);
        }
    }
}
