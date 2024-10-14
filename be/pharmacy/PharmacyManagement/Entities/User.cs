using System;
using PharmacyManagement.Entities.Common;
using PharmacyManagement.Enums;

namespace PharmacyManagement.Entities;

public class User : Entity
{
    public string Name { get; set; } = string.Empty;
    public string Phone { get; set; } = string.Empty;
    public string Address { get; set; } = string.Empty;
    public Gender Gender { get; set; } = Gender.None;
    public bool IsActive { get; set; } = true;
}
