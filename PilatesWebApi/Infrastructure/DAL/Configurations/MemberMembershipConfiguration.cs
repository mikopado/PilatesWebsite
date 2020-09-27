using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PilatesWebApi.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PilatesWebApi.Infrastructure.DAL.Configurations
{
    public class MemberMembershipConfiguration : IEntityTypeConfiguration<MemberMembership>
    {
        public void Configure(EntityTypeBuilder<MemberMembership> builder)
        {
            builder.HasOne(m => m.Membership)
               .WithMany(m => m.Members)
               .HasForeignKey(c => c.MembershipId)
               .IsRequired();

            builder.HasOne(m => m.Member)
               .WithMany(t => t.Memberships)
               .HasForeignKey(m => m.MemberId)
               .IsRequired();

            builder.Property(x => x.ExpirationTime)
                .IsRequired();

            // Filter all removed entries when query database
            builder.HasQueryFilter(p => !p.IsDeleted);
        }
    }
}
