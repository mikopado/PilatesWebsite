using AutoMapper;
using Microsoft.EntityFrameworkCore;
using PilatesWebApi.Application.DTO.Requests;
using PilatesWebApi.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace PilatesWebApi.Infrastructure.DAL.Repositories
{
    public class Repository<T> : IRepository<T> where T : class
    {
        private readonly DbSet<T> _entities;
        private readonly DbSet<Class> _entitiess;

        public Repository(DbContext context)
        {
            _entities = context.Set<T>();
            _entitiess = context.Set<Class>();
        }

        public void Add(T entity)
        {
            _entities.Add(entity);
        }

        public async Task AddAsync(T entity)
        {
            await _entities.AddAsync(entity);
        }

        public async Task AddMultipleAsync(IEnumerable<T> entities)
        {
            await _entities.AddRangeAsync(entities);
        }
        
        // Just disable entities not removing from Db
        public void Delete(T entity)
        {
            _entities.Remove(entity);
        }        

        public async Task<IEnumerable<T>> FindAsync(Expression<Func<T, bool>> predicate)
        {
            return await _entities.Where(predicate).ToListAsync();
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

        public IQueryable<T> With(params Expression<Func<T, object>>[] properties)
        {
            if (properties == null) throw new ArgumentNullException(nameof(properties));

            var query = _entities as IQueryable<T>;

            return properties.Aggregate(query, (current, property) => current.Include(property));
        }
       
    }
}
