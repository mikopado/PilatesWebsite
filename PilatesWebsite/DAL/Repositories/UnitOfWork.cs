using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PilatesWebsite.DAL.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private PilatesDbContext _context;

        public UnitOfWork(PilatesDbContext dbContext)
        {
            _context = dbContext;
            Classes = new ClassRepository(_context);
        }
        public IClassRepository Classes { get; }

        public void Dispose()
        {
            _context.Dispose();
        }

        public Task<int> SaveAsync()
        {
            return _context.SaveChangesAsync();
        }
    }
}
