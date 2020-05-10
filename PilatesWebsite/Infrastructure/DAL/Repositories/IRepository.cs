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
        void Delete(T entity);
        void Update(T entity);
        Task<T> Get(Guid id);
        Task<IEnumerable<T>> GetEntities();
        IEnumerable<T> Find(Expression<Func<T, bool>> predicate);
    }
}
