using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using ProductDemoAPI.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductDemoAPI.Data
{
    public class DemoDBContext : DbContext
    {
        private readonly IConfiguration _config;
        public  DemoDBContext(IConfiguration config)
        {
            _config = config;
        }

        public DbSet<Product> Products { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder bldr)
        {
            base.OnConfiguring(bldr);

            bldr.UseSqlServer(_config.GetConnectionString("DemoDBAppCon"));
        }
    }
}
