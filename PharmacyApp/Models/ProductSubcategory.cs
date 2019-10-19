using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PharmacyApp.Models
{
    public class ProductSubcategory
    {
        [Key]
        public int SubcategoryId { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string SubcategoryName { get; set; }

        [Required]
        public int ProductCategoryId { get; set; }

        public virtual ICollection<Product> Products { get; set; }
    }
}
