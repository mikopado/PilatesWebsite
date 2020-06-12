using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PilatesWebApi.Domain.Models;

namespace PilatesWebApi.Infrastructure.DAL.Configurations
{
    public class ClassConfiguration : IEntityTypeConfiguration<Class>
    {
        public void Configure(EntityTypeBuilder<Class> builder)
        {
            builder.HasOne(cl => cl.Teacher)
                .WithMany(t => t.Classes)
                .HasForeignKey(c => c.TeacherId)
                .IsRequired();    
            
            builder.Property(x => x.Type)
                .HasConversion<string>()
                .IsRequired();

            builder.Property(x => x.Level)
               .HasConversion<string>()
               .IsRequired();

            // Filter all removed entries when query database
            builder.HasQueryFilter(p => !p.IsDeleted);

        }
    }
}
