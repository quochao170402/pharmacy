using System;
using PharmacyManagement.Entities.Common;

namespace PharmacyManagement.Entities;

public class OrderItem : Entity
{
    public int Quantity { get; set; }
    public decimal Amount { get; set; }
    public virtual Guid DrugId { get; set; }
    public virtual Drug Drug { get; set; }
    public virtual Guid OrderId { get; set; }
    public virtual Order Order { get; set; }
}
