using Microsoft.EntityFrameworkCore;
namespace Project_Vpd.Models
{
    public class HomeContext: DbContext
    {
   #pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
        public HomeContext(DbContextOptions<HomeContext> options) : base(options) { }
#pragma warning restore CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.

        public virtual DbSet<Vegetable> Vegetables { get; set; }
    }
}
