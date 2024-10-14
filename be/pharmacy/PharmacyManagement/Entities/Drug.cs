using System;
using PharmacyManagement.Entities.Common;

namespace PharmacyManagement.Entities;

public class Drug : Entity
{
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Image { get; set; } = string.Empty;
    public decimal UnitPrice { get; set; }
    public virtual Guid CategoryId { get; set; }
    public virtual Category Category { get; set; }
    public virtual ICollection<DrugPrice> DrugPrices { get; set; } = [];
    public virtual ICollection<DrugIngredient> DrugIngredients { get; set; } = [];
}
