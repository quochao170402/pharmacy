using System;
using PharmacyManagement.Entities.Common;

namespace PharmacyManagement.Entities;

public class Order : Entity
{
    public DateTime OrderedAt { get; set; }
    public int TotalItem { get; set; }
    public decimal Amount { get; set; }
    public virtual Guid CustomerId { get; set; }
    public virtual User Customer { get; set; }
    public virtual Guid UserId { get; set; }
    public virtual User User { get; set; }
    public virtual ICollection<OrderItem> OrderItems { get; set; } = [];
}
