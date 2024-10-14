using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PharmacyManagement.Migrations
{
    /// <inheritdoc />
    public partial class fixbug : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DrugIngredients_Drugs_DrugId1",
                table: "DrugIngredients");

            migrationBuilder.DropForeignKey(
                name: "FK_DrugIngredients_Ingredients_IngredientId1",
                table: "DrugIngredients");

            migrationBuilder.DropForeignKey(
                name: "FK_DrugPrices_Drugs_DrugId1",
                table: "DrugPrices");

            migrationBuilder.DropIndex(
                name: "IX_DrugPrices_DrugId1",
                table: "DrugPrices");

            migrationBuilder.DropIndex(
                name: "IX_DrugIngredients_DrugId1",
                table: "DrugIngredients");

            migrationBuilder.DropIndex(
                name: "IX_DrugIngredients_IngredientId1",
                table: "DrugIngredients");

            migrationBuilder.DropColumn(
                name: "DrugId1",
                table: "DrugPrices");

            migrationBuilder.DropColumn(
                name: "DrugId1",
                table: "DrugIngredients");

            migrationBuilder.DropColumn(
                name: "IngredientId1",
                table: "DrugIngredients");

            migrationBuilder.AlterColumn<Guid>(
                name: "DrugId",
                table: "DrugPrices",
                type: "uniqueidentifier",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<Guid>(
                name: "IngredientId",
                table: "DrugIngredients",
                type: "uniqueidentifier",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<Guid>(
                name: "DrugId",
                table: "DrugIngredients",
                type: "uniqueidentifier",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.CreateIndex(
                name: "IX_DrugPrices_DrugId",
                table: "DrugPrices",
                column: "DrugId");

            migrationBuilder.CreateIndex(
                name: "IX_DrugIngredients_DrugId",
                table: "DrugIngredients",
                column: "DrugId");

            migrationBuilder.CreateIndex(
                name: "IX_DrugIngredients_IngredientId",
                table: "DrugIngredients",
                column: "IngredientId");

            migrationBuilder.AddForeignKey(
                name: "FK_DrugIngredients_Drugs_DrugId",
                table: "DrugIngredients",
                column: "DrugId",
                principalTable: "Drugs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_DrugIngredients_Ingredients_IngredientId",
                table: "DrugIngredients",
                column: "IngredientId",
                principalTable: "Ingredients",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_DrugPrices_Drugs_DrugId",
                table: "DrugPrices",
                column: "DrugId",
                principalTable: "Drugs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DrugIngredients_Drugs_DrugId",
                table: "DrugIngredients");

            migrationBuilder.DropForeignKey(
                name: "FK_DrugIngredients_Ingredients_IngredientId",
                table: "DrugIngredients");

            migrationBuilder.DropForeignKey(
                name: "FK_DrugPrices_Drugs_DrugId",
                table: "DrugPrices");

            migrationBuilder.DropIndex(
                name: "IX_DrugPrices_DrugId",
                table: "DrugPrices");

            migrationBuilder.DropIndex(
                name: "IX_DrugIngredients_DrugId",
                table: "DrugIngredients");

            migrationBuilder.DropIndex(
                name: "IX_DrugIngredients_IngredientId",
                table: "DrugIngredients");

            migrationBuilder.AlterColumn<string>(
                name: "DrugId",
                table: "DrugPrices",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier");

            migrationBuilder.AddColumn<Guid>(
                name: "DrugId1",
                table: "DrugPrices",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AlterColumn<string>(
                name: "IngredientId",
                table: "DrugIngredients",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier");

            migrationBuilder.AlterColumn<string>(
                name: "DrugId",
                table: "DrugIngredients",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier");

            migrationBuilder.AddColumn<Guid>(
                name: "DrugId1",
                table: "DrugIngredients",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<Guid>(
                name: "IngredientId1",
                table: "DrugIngredients",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_DrugPrices_DrugId1",
                table: "DrugPrices",
                column: "DrugId1");

            migrationBuilder.CreateIndex(
                name: "IX_DrugIngredients_DrugId1",
                table: "DrugIngredients",
                column: "DrugId1");

            migrationBuilder.CreateIndex(
                name: "IX_DrugIngredients_IngredientId1",
                table: "DrugIngredients",
                column: "IngredientId1");

            migrationBuilder.AddForeignKey(
                name: "FK_DrugIngredients_Drugs_DrugId1",
                table: "DrugIngredients",
                column: "DrugId1",
                principalTable: "Drugs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_DrugIngredients_Ingredients_IngredientId1",
                table: "DrugIngredients",
                column: "IngredientId1",
                principalTable: "Ingredients",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_DrugPrices_Drugs_DrugId1",
                table: "DrugPrices",
                column: "DrugId1",
                principalTable: "Drugs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
