using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PharmacyApp.Models
{
    public class PharmacyContext: DbContext
    {
        public PharmacyContext(DbContextOptions<PharmacyContext> options) : base(options)
        {

        }

        // Add ProductCategory entity to this dbContext
        public DbSet<ProductCategory> productCategories { get; set; }

        // Add ProductSubcategory entity to this dbContext
        public DbSet<ProductSubcategory> productSubcategories { get; set; }

        // Add Product entity to this dbContext
        public DbSet<Product> products { get; set; }

        // Add Label entity to this dbContext
        public DbSet<Label> labels { get; set; }
    }

}
