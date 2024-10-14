using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PharmacyManagement.Models.Categories;

public class CategoryModel
{
	public Guid Id { get; set; }
	public DateTime CreatedAt { get; set; }
	public int Name { get; set; }
	public sbyte Description { get; set; }

}
