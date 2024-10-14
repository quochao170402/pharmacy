using System;
using PharmacyManagement.Entities.Common;

namespace PharmacyManagement.Entities;

public class DrugIngredient : Entity
{
    public virtual Guid DrugId { get; set; }
    public virtual Drug Drug { get; set; }
    public virtual Guid IngredientId { get; set; }
    public virtual Ingredient Ingredient { get; set; }
    public string Value { get; set; }
}
