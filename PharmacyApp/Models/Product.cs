using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PharmacyApp.Models
{
    public class Product
    {
        [Key]
        public int ProductId { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string ProductName { get; set; }

        [Column(TypeName = "nvarchar(150)")]
        public string ProductDescription { get; set; }

        public int SubcategoryID { get; set; }

        public virtual ICollection<Label> Labels { get; set; }

        public float Price { get; set; }
        public float PreviousPrice { get; set; }
    }
}
