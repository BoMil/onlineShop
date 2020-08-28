using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PharmacyApp.Models;

namespace PharmacyApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductCategoriesController : ControllerBase
    {
        private readonly PharmacyContext _context;

        public ProductCategoriesController(PharmacyContext context)
        {
            _context = context;
        }

        // GET: api/ProductCategories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProductCategory>>> GetproductCategories()
        {
            var allCategories = await _context.productCategories.ToListAsync();
            var allSubcategories = await _context.productSubcategories.ToListAsync();
            // var allProducts = await _context.products.ToListAsync();

            List<ProductCategory> completeCategories = new List<ProductCategory>();

            if (allCategories == null)
            {
                return NotFound();
            }

            for (int i = 0; i < allCategories.Count; i++)
            {
                ProductCategory category = allCategories[i];

                if (allSubcategories != null)
                {
                    for (int index = 0; index < allSubcategories.Count; index++)
                    {
                        ProductSubcategory subcategory = allSubcategories[index];

						// ? Uncoment this in case you want to add products to subcategories
                        // if (allProducts != null)
                        // {
                        //     for (int a = 0; a < allProducts.Count; a++)
                        //     {
                        //         Product product = allProducts[a];

                        //         if (product.SubcategoryID == subcategory.SubcategoryId)
                        //         {
                        //             subcategory.Products.Add(product);
                        //         }
                        //     }
                        // }

                        if (subcategory.ProductCategoryId == category.CategoryId)
                        {
                            category.Subcategories.Add(subcategory);
                        }

                    }
                }
            }
            return allCategories;
        }

        // GET: api/ProductCategories/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProductCategory>> GetProductCategory(int id)
        {
            var productCategory = await _context.productCategories.FindAsync(id);

            if (productCategory == null)
            {
                return NotFound();
            }

            return productCategory;
        }

        // PUT: api/ProductCategories/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProductCategory(int id, ProductCategory productCategory)
        {
            if (id != productCategory.CategoryId)
            {
                return BadRequest();
            }

            _context.Entry(productCategory).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductCategoryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ProductCategories
        [HttpPost]
        public async Task<ActionResult<ProductCategory>> PostProductCategory(ProductCategory productCategory)
        {
            _context.productCategories.Add(productCategory);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProductCategory", new { id = productCategory.CategoryId }, productCategory);
        }

        // DELETE: api/ProductCategories/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ProductCategory>> DeleteProductCategory(int id)
        {
            var productCategory = await _context.productCategories.FindAsync(id);
            if (productCategory == null)
            {
                return NotFound();
            }

            _context.productCategories.Remove(productCategory);
            await _context.SaveChangesAsync();

            return productCategory;
        }

        private bool ProductCategoryExists(int id)
        {
            return _context.productCategories.Any(e => e.CategoryId == id);
        }
    }
}
