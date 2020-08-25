using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PharmacyApp.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "productCategories",
                columns: table => new
                {
                    CategoryId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CategoryName = table.Column<string>(type: "nvarchar(50)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_productCategories", x => x.CategoryId);
                });

            migrationBuilder.CreateTable(
                name: "productSubcategories",
                columns: table => new
                {
                    SubcategoryId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    SubcategoryName = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    ProductCategoryId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_productSubcategories", x => x.SubcategoryId);
                    table.ForeignKey(
                        name: "FK_productSubcategories_productCategories_ProductCategoryId",
                        column: x => x.ProductCategoryId,
                        principalTable: "productCategories",
                        principalColumn: "CategoryId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "products",
                columns: table => new
                {
                    ProductId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ProductName = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    ProductDescription = table.Column<string>(type: "nvarchar(150)", nullable: true),
                    SubcategoryID = table.Column<int>(nullable: false),
                    CategoryID = table.Column<int>(nullable: false),
                    Price = table.Column<float>(nullable: false),
                    PreviousPrice = table.Column<float>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_products", x => x.ProductId);
                    table.ForeignKey(
                        name: "FK_products_productSubcategories_SubcategoryID",
                        column: x => x.SubcategoryID,
                        principalTable: "productSubcategories",
                        principalColumn: "SubcategoryId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "labels",
                columns: table => new
                {
                    LabelId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LabelName = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    Color = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    ProductId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_labels", x => x.LabelId);
                    table.ForeignKey(
                        name: "FK_labels_products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "products",
                        principalColumn: "ProductId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_labels_ProductId",
                table: "labels",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_products_SubcategoryID",
                table: "products",
                column: "SubcategoryID");

            migrationBuilder.CreateIndex(
                name: "IX_productSubcategories_ProductCategoryId",
                table: "productSubcategories",
                column: "ProductCategoryId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "labels");

            migrationBuilder.DropTable(
                name: "products");

            migrationBuilder.DropTable(
                name: "productSubcategories");

            migrationBuilder.DropTable(
                name: "productCategories");
        }
    }
}
