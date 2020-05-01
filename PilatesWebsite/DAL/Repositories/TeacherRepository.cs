using Microsoft.EntityFrameworkCore;
using PilatesWebsite.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PilatesWebsite.DAL.Repositories
{
    public class TeacherRepository : Repository<Teacher>, ITeacherRepository
    {
        private PilatesDbContext _dbContext;
        public TeacherRepository(PilatesDbContext context) : base(context)
        {
            _dbContext = context;
        }
    }
}
