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

        // Should be changed. No delete entity from Db but only disable entity
        public void Delete(T entity)
        {
            _entities.Remove(entity);
        }        

        public IEnumerable<T> Find(Expression<Func<T, bool>> predicate)
        {
            return _entities.Where(predicate);
        }

        public T Get(Guid id)
        {
            return _entities.Find(id);
        }

        public IEnumerable<T> GetEntities()
        {
            return _entities.ToList();
        }

        public void Update(T entity)
        {
            _entities.Update(entity);
        }
    }
}
