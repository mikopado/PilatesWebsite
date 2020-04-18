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
        void Delete(Guid id);
        void Update(T entity);
        T Get(Guid id);
        IEnumerable<T> GetEntities();
        IEnumerable<T> Find(Expression<Func<T, bool>> predicate);
    }
}
