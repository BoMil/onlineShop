using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PharmacyApp.Models
{
    /// <summary>
    /// The data context class is used for accessing application data through Entity Framework Core
    /// </summary>
    public class PharmacyContext: DbContext
    {
        public PharmacyContext(DbContextOptions<PharmacyContext> options) : base(options)
        {

        }
		// Add User entity to this dbContext
        public DbSet<User> Users { get; set; }

        // Add Order entity to this dbContext
	    public DbSet<Order> Orders { get; set; }

        // Add OrderItem entity to this dbContext
		public DbSet<OrderItem> OrderItems { get; set; }

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
