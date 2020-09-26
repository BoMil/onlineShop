using System;
using System.ComponentModel.DataAnnotations;

namespace PharmacyApp.Models
{
    public class Order
    {
        public int OrderId { get; set; }
        public DateTime OrderDate { get; set; }

        [Required]
        [MinLength(4)]
        public string OrderNumber { get; set; }

        public User User { get; set; }
    }
}
