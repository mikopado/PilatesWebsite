using Microsoft.EntityFrameworkCore;
using PilatesWebsite.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;

namespace PilatesWebsite.DAL.Repositories
{
    public class Repository<T> : IRepository<T> where T : class
    {
        private readonly DbSet<T> _entities;

        public Repository(DbContext context)
        {
            _entities = context.Set<T>();
        }

        public void Add(T entity)
        {
            _entities.Add(entity);
        }

        public async Task AddAsync(T entity)
        {
            await _entities.AddAsync(entity);
        }

        // Just disable entities not removing from Db
        public async Task DeleteAsync(T entity)
        {
            (await _entities.ToListAsync()).Remove(entity);
        }        

        public async Task<IEnumerable<T>> FindAsync(Expression<Func<T, bool>> predicate)
        {
            return (await _entities.ToListAsync()).AsQueryable().Where(predicate);
        }

        public async Task<T> GetAsync(Guid id)
        {
            return await _entities.FindAsync(id);
        }

        public async Task<IEnumerable<T>> GetEntitiesAsync()
        {
            return await _entities.ToListAsync();
        }

        public void Update(T entity)
        {
            _entities.Update(entity);
        }
    }
}
