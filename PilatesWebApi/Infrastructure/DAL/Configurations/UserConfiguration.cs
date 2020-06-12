using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PilatesWebApi.Domain.Models;

namespace PilatesWebApi.Infrastructure.DAL.Configurations
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.Property(x => x.Email)
                .IsRequired();

            builder.Property(x => x.Password)
                .IsRequired();

            // Filter all removed entries when query database
            builder.HasQueryFilter(p => !p.IsDeleted);
        }
    }
}
