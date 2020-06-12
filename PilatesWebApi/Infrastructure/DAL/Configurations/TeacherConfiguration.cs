using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PilatesWebApi.Domain.Models;

namespace PilatesWebApi.Infrastructure.DAL.Configurations
{
    public class TeacherConfiguration : IEntityTypeConfiguration<Teacher>
    {
        public void Configure(EntityTypeBuilder<Teacher> builder)
        {
            builder.Property(x => x.FirstName)
                .IsRequired();

            builder.Property(x => x.LastName)
               .IsRequired();

            // Filter all removed entries when query database
            builder.HasQueryFilter(p => !p.IsDeleted);
        }
    }
}
