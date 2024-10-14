using System;
using PharmacyManagement.Entities.Common;

namespace PharmacyManagement.Entities;

public class DrugPrice : Entity
{
    public decimal Price { get; set; }
    public bool IsActive { get; set; }
    public virtual Guid DrugId { get; set; }
    public virtual Drug Drug { get; set; }
}
