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
    public class ProductSubcategoriesController : ControllerBase
    {
        private readonly PharmacyContext _context;

        public ProductSubcategoriesController(PharmacyContext context)
        {
            _context = context;
        }

        // GET: api/ProductSubcategories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProductSubcategory>>> GetproductSubcategories()
        {
            return await _context.productSubcategories.ToListAsync();
        }

        // GET: api/ProductSubcategories/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProductSubcategory>> GetProductSubcategory(int id)
        {
            var productSubcategory = await _context.productSubcategories.FindAsync(id);

            if (productSubcategory == null)
            {
                return NotFound();
            }

            return productSubcategory;
        }

        // GET: api/ProductSubcategories/byCategoryId/5
        [HttpGet("byCategoryId/{id}")]
        public async Task<ActionResult<IEnumerable<ProductSubcategory>>> GetProductSubcategoriesByCategoryId(int id)
        {
            var allSubcategories = await _context.productSubcategories.ToListAsync();
            List<ProductSubcategory> subcategoriesByCategoryId = new List<ProductSubcategory>();

            if (allSubcategories == null)
            {
                return NotFound();
            }

            for (int i = 0; i < allSubcategories.Count; i++)
            {
                ProductSubcategory subcategory = allSubcategories[i];

                if (subcategory.ProductCategoryId == id)
                {
                    subcategoriesByCategoryId.Add(subcategory);
                }
            }

            return subcategoriesByCategoryId;
        }

        // PUT: api/ProductSubcategories/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProductSubcategory(int id, ProductSubcategory productSubcategory)
        {
            if (id != productSubcategory.SubcategoryId)
            {
                return BadRequest();
            }

            _context.Entry(productSubcategory).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductSubcategoryExists(id))
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

        // POST: api/ProductSubcategories
        [HttpPost]
        public async Task<ActionResult<ProductSubcategory>> PostProductSubcategory(ProductSubcategory productSubcategory)
        {
            _context.productSubcategories.Add(productSubcategory);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProductSubcategory", new { id = productSubcategory.SubcategoryId }, productSubcategory);
        }

        // DELETE: api/ProductSubcategories/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ProductSubcategory>> DeleteProductSubcategory(int id)
        {
            var productSubcategory = await _context.productSubcategories.FindAsync(id);
            if (productSubcategory == null)
            {
                return NotFound();
            }

            _context.productSubcategories.Remove(productSubcategory);
            await _context.SaveChangesAsync();

            return productSubcategory;
        }

        private bool ProductSubcategoryExists(int id)
        {
            return _context.productSubcategories.Any(e => e.SubcategoryId == id);
        }
    }
}
