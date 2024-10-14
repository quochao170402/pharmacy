using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PharmacyManagement.Context;
using PharmacyManagement.Entities;
using PharmacyManagement.Models.Categories;

namespace PharmacyManagement.Controllers;

[ApiController]
[Route("api/[controller]/[action]")]
public class CategoryController : ControllerBase
{
    private readonly PharmacyContext _context;

    public CategoryController(PharmacyContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        var categories = await _context.Categories.ToListAsync();
        return Ok(categories);
    }

    [HttpPost]
    public async Task<IActionResult> Add([FromBody] AddCategoryRequest request)
    {

        var category = new Category
        {
            Name = request.Name,
            Description = request.Description,
        };

        _context.Categories.Add(category);
        await _context.SaveChangesAsync();

        return Ok(category);
    }


    [HttpPut("{id:guid}")]
    public async Task<IActionResult> Update([FromRoute] Guid id, [FromBody] AddCategoryRequest request)
    {

        var existing = await _context.Categories.FindAsync(id)
            ?? throw new Exception("Không tìm thấy danh mục thuốc");

        var category = new Category
        {
            Name = request.Name,
            Description = request.Description,
        };

        _context.Categories.Add(category);
        await _context.SaveChangesAsync();

        return Ok(category);
    }
}
