using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PilatesWebsite.DAL.Repositories
{
    public interface IUnitOfWork : IDisposable
    {
        IClassRepository Classes { get; }
        Task<int> SaveAsync();
    }
}
