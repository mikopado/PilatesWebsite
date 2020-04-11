using Microsoft.EntityFrameworkCore;
using PilatesWebsite.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PilatesWebsite.DAL
{
    public class PilatesDbContext : DbContext
    {
        public PilatesDbContext(DbContextOptions<PilatesDbContext> options)
            :base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Class>().Property(x => x.)
        }

        public DbSet<Class> Classes { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Membership> Memberships { get; set; }
        public DbSet<CustomerMembership> CustomerMemberships { get; set; }
        public DbSet<Teacher> Teachers { get; set; }
    }
}
