using Microsoft.EntityFrameworkCore;
using PilatesWebsite.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PilatesWebsite.DAL.Repositories
{
    public class ClassRepository : Repository<Class>, IClassRepository
    {
        private PilatesDbContext _dbContext;

        public ClassRepository(PilatesDbContext context) : base(context)
        {
            _dbContext = context;
        }
              
    }
}
