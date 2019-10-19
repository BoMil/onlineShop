using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PharmacyApp.Models
{
    public class Label
    {
        [Key]
        public int LabelId { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string LabelName { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string Color { get; set; }
    }
}
