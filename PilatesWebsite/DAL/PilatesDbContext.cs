using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using PilatesWebsite.DAL.Configurations;
using PilatesWebsite.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;

namespace PilatesWebsite.DAL
{
    public class PilatesDbContext : DbContext
    {
        public PilatesDbContext(DbContextOptions<PilatesDbContext> options)
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
            base.OnModelCreating(modelBuilder);
        }
        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            var entries = ChangeTracker
                        .Entries()
                        .Where(e => e.Entity is DatedEntity && (
                        e.State == EntityState.Added
                        || e.State == EntityState.Modified));

            foreach (var entityEntry in entries)
            {
                ((DatedEntity)entityEntry.Entity).UpdatedAt = DateTime.Now;

                if (entityEntry.State == EntityState.Added)
                {
                    ((DatedEntity)entityEntry.Entity).CreatedAt = DateTime.Now;
                }
            }
            return base.SaveChangesAsync(cancellationToken);

        }

        public DbSet<Class> Classes { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Membership> Memberships { get; set; }
        public DbSet<Member> Members { get; set; }
        public DbSet<Teacher> Teachers { get; set; }
    }
}
