using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PilatesWebApi.Infrastructure.DAL.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private PilatesDbContext _context;
        private Dictionary<Type, object> _repositories;

        public UnitOfWork(PilatesDbContext dbContext)
        {
            _context = dbContext;           
            _repositories = new Dictionary<Type, object>();
        }

        public IRepository<T> Repository<T>() where T : class
        {
            if (!_repositories.ContainsKey(typeof(T)))
            {
                _repositories.Add(typeof(T), new Repository<T>(_context));
            }

            return _repositories[typeof(T)] as IRepository<T>;
        }

        public Task<int> SaveAsync()
        {
            return _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
