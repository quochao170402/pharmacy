using System;

namespace PharmacyManagement.Models.Categories;

public class AddCategoryRequest
{
	public string Name { get; set; }
	public string Description { get; set; } = string.Empty;
}
