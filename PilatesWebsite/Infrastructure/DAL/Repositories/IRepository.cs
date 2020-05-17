using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace PilatesWebsite.DAL.Repositories
{
    public interface IRepository<T>
    {
        void Add(T entity);
        Task AddAsync(T entity);
        Task DeleteAsync(T entity);
        void Update(T entity);
        Task<T> GetAsync(Guid id);
        Task<IEnumerable<T>> GetEntitiesAsync();
        Task<IEnumerable<T>> FindAsync(Expression<Func<T, bool>> predicate);
    }
}
