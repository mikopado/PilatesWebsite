using Microsoft.EntityFrameworkCore;
using PilatesWebApi.Domain.Models;
using System;
using System.Linq;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;

namespace PilatesWebApi.Infrastructure.DAL
{
    public class PilatesDbContext : DbContext
    {
        public PilatesDbContext(DbContextOptions<PilatesDbContext> options)
            : base(options)
        {
            // No tracking entities when it's only readonly
            ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
            base.OnModelCreating(modelBuilder);
        }
        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            UpdateEntries();
            DeleteEntries();
            CheckMembershipExpiration(); // TODO to remove maybe because it's not efficient

            return base.SaveChangesAsync(cancellationToken);
        }

        public DbSet<Class> Classes { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Membership> Memberships { get; set; }
        public DbSet<Member> Members { get; set; }
        public DbSet<Teacher> Teachers { get; set; }
        public DbSet<ClassCalendar> ClassCalendars { get; set; }
        public DbSet<ClassBooking> ClassBookings { get; set; }
        public DbSet<MemberMembership> MemberMemberships { get; set; }

        private void DeleteEntries()
        {
            var deletables = ChangeTracker.Entries().Where(x => x.State == EntityState.Deleted);

            foreach (var item in deletables)
            {
                if (item.Entity is IDeletable entity)
                {
                    // Set the entity to unchanged (if we mark the whole entity as Modified, every field gets sent to Db as an update)
                    item.State = EntityState.Unchanged;
                    // Only update the IsDeleted flag - only this will get sent to the Db
                    entity.IsDeleted = true;
                }
            }
        }

        private void UpdateEntries()
        {
            var entries = ChangeTracker
                        .Entries()
                        .Where(e => e.State == EntityState.Added
                        || e.State == EntityState.Modified);

            foreach (var entityEntry in entries)
            {
                if (entityEntry.Entity is DatedEntity entity)
                {
                    if (entityEntry.State == EntityState.Modified)
                    {
                        entity.UpdatedAt = DateTime.Now;
                        entityEntry.Property("CreatedAt").IsModified = false;
                    }
                    if (entityEntry.State == EntityState.Added)
                    {
                        entity.CreatedAt = DateTime.Now;
                    }
                }
                if(entityEntry.State == EntityState.Added && entityEntry.Entity is IDeletable deletable)
                {
                    deletable.IsDeleted = false;
                }

            }
        }
        private void CheckMembershipExpiration()
        {
            var deletables = ChangeTracker.Entries();

            foreach (var item in deletables)
            {
                if (item.Entity is MemberMembership entity)
                {
                    if(entity.ExpirationTime.Date <= DateTime.Now.Date)
                    {
                        // Set the entity to unchanged (if we mark the whole entity as Modified, every field gets sent to Db as an update)
                        item.State = EntityState.Unchanged;
                        // Only update the IsDeleted flag - only this will get sent to the Db
                        entity.IsDeleted = true;
                    }
                    
                }
            }
        }

    }
}
