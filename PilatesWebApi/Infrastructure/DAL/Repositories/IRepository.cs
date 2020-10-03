﻿using PilatesWebApi.Application.DTO.Requests;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace PilatesWebApi.Infrastructure.DAL.Repositories
{
    public interface IRepository<T>
    {
        void Add(T entity);
        Task AddAsync(T entity);
        Task AddMultipleAsync(IEnumerable<T> entities);
        void Delete(T entity);
        void Update(T entity);
        Task<T> GetAsync(Guid id);
        Task<IEnumerable<T>> GetEntitiesAsync();
        Task<IEnumerable<T>> FindAsync(Expression<Func<T, bool>> predicate);
        IQueryable<T> With(params Expression<Func<T, object>>[] properties);
    }
}
