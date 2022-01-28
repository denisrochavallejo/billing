using Microsoft.EntityFrameworkCore.Migrations;

namespace BasicBilling.API.Migrations
{
    public partial class InitialCreate3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Bills_Services_ServiceId",
                table: "Bills");

            migrationBuilder.DropIndex(
                name: "IX_Bills_ServiceId",
                table: "Bills");

            migrationBuilder.DropColumn(
                name: "ServiceId",
                table: "Bills");

            migrationBuilder.AddColumn<string>(
                name: "Service",
                table: "Bills",
                type: "TEXT",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Service",
                table: "Bills");

            migrationBuilder.AddColumn<int>(
                name: "ServiceId",
                table: "Bills",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Bills_ServiceId",
                table: "Bills",
                column: "ServiceId");

            migrationBuilder.AddForeignKey(
                name: "FK_Bills_Services_ServiceId",
                table: "Bills",
                column: "ServiceId",
                principalTable: "Services",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
