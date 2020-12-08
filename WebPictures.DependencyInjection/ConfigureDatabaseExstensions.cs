using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using WebPicturesUser.Data.UserContextDB;

namespace WebAuti.DependencyInjection
{
    public static class ConfigureDatabaseExstensions
    {
        public static void ConfigureDb(this IServiceCollection services, string connection)
        {
            services.AddDbContext<UserContext>(options => options.UseSqlServer(connection));
        }
    }
}
