using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PharmacyApp.Models
{
    public class Product
    {
        [Key]
        public int ProductId { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string ProductName { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string CategoryName { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string SubcategoryName { get; set; }

        public int Quantity { get; set; }

        [Column(TypeName = "nvarchar(150)")]
        public string ProductDescription { get; set; }

        public int SubcategoryID { get; set; }
        public int CategoryID { get; set; }

        public virtual ICollection<Label> Labels { get; set; }

        public float Price { get; set; }
        public float PreviousPrice { get; set; }
    }
}
