using System;
using Microsoft.EntityFrameworkCore;
using PharmacyManagement.Entities;

namespace PharmacyManagement.Context;

public class PharmacyContext : DbContext
{
    public PharmacyContext(DbContextOptions<PharmacyContext> options) : base(options)
    {
    }
    public DbSet<Category> Categories { get; set; }
    public DbSet<Drug> Drugs { get; set; }
    public DbSet<DrugPrice> DrugPrices { get; set; }
    public DbSet<Ingredient> Ingredients { get; set; }
    public DbSet<DrugIngredient> DrugIngredients { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<Order> Orders { get; set; }
    public DbSet<OrderItem> OrderItems { get; set; }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Order>(order =>
        {
            // Order -> User (Customer)
            order.HasOne(o => o.Customer)
                  .WithMany()
                  .HasForeignKey(o => o.CustomerId)
                  .OnDelete(DeleteBehavior.NoAction);

            // Order -> User (Assigned User)
            order.HasOne(o => o.User)
                  .WithMany()
                  .HasForeignKey(o => o.UserId)
                  .OnDelete(DeleteBehavior.NoAction);

            // Order -> OrderItems (One to Many)
            order.HasMany(o => o.OrderItems)
                  .WithOne(oi => oi.Order)
                  .HasForeignKey(oi => oi.OrderId)
                  .OnDelete(DeleteBehavior.Cascade);
        });

        base.OnModelCreating(modelBuilder);
    }

    protected override void ConfigureConventions(ModelConfigurationBuilder configurationBuilder)
    {
        configurationBuilder.Properties<decimal>()
            .HavePrecision(18, 6);

        base.ConfigureConventions(configurationBuilder);
    }
}
