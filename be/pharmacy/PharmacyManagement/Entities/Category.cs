using System;
using PharmacyManagement.Entities.Common;

namespace PharmacyManagement.Entities;

public class Category : Entity
{
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public virtual ICollection<Drug> Drugs { get; set; } = new List<Drug>();
}
