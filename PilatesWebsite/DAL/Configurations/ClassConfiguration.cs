﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PilatesWebsite.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PilatesWebsite.DAL.Configurations
{
    public class ClassConfiguration : IEntityTypeConfiguration<Class>
    {
        public void Configure(EntityTypeBuilder<Class> builder)
        {
            builder.HasOne<TeacherConfiguration>()
                .WithMany()
                .HasForeignKey(x => x.TeacherId)
                .IsRequired();

            builder.HasOne<Level>()
                .WithMany()
                .HasForeignKey(x => x.LevelId)
                .IsRequired();

            builder.Property(x => x.Type)
                .HasConversion<string>()
                .IsRequired();

            builder.Property(x => x.Date)
                .IsRequired();
        }
    }
}
