using System.ComponentModel.DataAnnotations;

namespace PharmacyApp.Models
{
    public class OrderItem
    {
        public int OrderItemId { get; set; }

        [Required]
        public int Quantity { get; set; }

        [Required]
        public decimal UnitPrice { get; set; }

        public int OrderId { get; set; }
        public Order Order { get; set; }

        public Product Product { get; set; }
    }
}
