using System;
using Microsoft.EntityFrameworkCore;
using PharmacyManagement.Context;

namespace PharmacyManagement.Extensions;

public static class DataAccessExtension
{
    public static IServiceCollection AddDataAccess(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddDbContext<PharmacyContext>(options =>
            options.UseSqlServer(configuration.GetConnectionString("DefaultConnection"))
        );

        services.AddTransient<PharmacyContext>();
        return services;
    }
}
