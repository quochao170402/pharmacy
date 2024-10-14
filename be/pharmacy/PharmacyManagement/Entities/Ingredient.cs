using System;
using PharmacyManagement.Entities.Common;

namespace PharmacyManagement.Entities;

public class Ingredient : Entity
{
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public virtual ICollection<DrugIngredient> DrugIngredients { get; set; } = [];
}
