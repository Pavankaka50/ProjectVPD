using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Project_Vpd.Migrations
{
    public partial class migrationsadded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Vegetables",
                columns: table => new
                {
                    VegetableId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    VegetableName = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: false),
                    VegetablePrice = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vegetables", x => x.VegetableId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Vegetables");
        }
    }
}
