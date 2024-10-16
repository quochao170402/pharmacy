using System;

namespace PharmacyManagement.Entities.Common;

public class Entity : IEntity
{
    public Guid Id { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public bool IsDeleted { get; set; } = false;
}
