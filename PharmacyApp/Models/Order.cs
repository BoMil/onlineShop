using System;
using System.Collections.Generic;
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

        public ICollection<OrderItem> Items { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }
    }
}
