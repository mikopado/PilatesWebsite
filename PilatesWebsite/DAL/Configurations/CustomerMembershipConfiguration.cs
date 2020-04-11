using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PilatesWebsite.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PilatesWebsite.DAL.Configurations
{
    public class CustomerMembershipConfiguration : IEntityTypeConfiguration<CustomerMembership>
    {
        public void Configure(EntityTypeBuilder<CustomerMembership> builder)
        {
            builder.HasKey(x => new { x.UserId, x.MembershipId });

            builder.HasOne<Membership>()
                .WithMany()
                .HasForeignKey(x => x.MembershipId)
                .IsRequired();

            builder.HasOne<User>()
                .WithMany()
                .HasForeignKey(x => x.UserId)
                .IsRequired();
        }
    }
}
