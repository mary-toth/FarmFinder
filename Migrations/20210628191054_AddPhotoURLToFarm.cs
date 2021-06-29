using Microsoft.EntityFrameworkCore.Migrations;

namespace FarmFinder.Migrations
{
    public partial class AddPhotoURLToFarm : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PhotoURL",
                table: "Farms",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PhotoURL",
                table: "Farms");
        }
    }
}
