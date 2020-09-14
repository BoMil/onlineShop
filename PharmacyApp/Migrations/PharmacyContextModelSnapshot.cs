﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PharmacyApp.Models;

namespace PharmacyApp.Migrations
{
    [DbContext(typeof(PharmacyContext))]
    partial class PharmacyContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.1-servicing-10028")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("PharmacyApp.Models.Label", b =>
                {
                    b.Property<int>("LabelId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Color")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("LabelName")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)");

                    b.Property<int?>("ProductId");

                    b.HasKey("LabelId");

                    b.HasIndex("ProductId");

                    b.ToTable("labels");
                });

            modelBuilder.Entity("PharmacyApp.Models.Product", b =>
                {
                    b.Property<int>("ProductId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CategoryID");

                    b.Property<string>("CategoryName")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)");

                    b.Property<float>("PreviousPrice");

                    b.Property<float>("Price");

                    b.Property<string>("ProductDescription")
                        .HasColumnType("nvarchar(150)");

                    b.Property<string>("ProductName")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)");

                    b.Property<int>("Quantity");

                    b.Property<int>("SubcategoryID");

                    b.Property<string>("SubcategoryName")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("ProductId");

                    b.HasIndex("SubcategoryID");

                    b.ToTable("products");
                });

            modelBuilder.Entity("PharmacyApp.Models.ProductCategory", b =>
                {
                    b.Property<int>("CategoryId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("CategoryName")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("CategoryId");

                    b.ToTable("productCategories");
                });

            modelBuilder.Entity("PharmacyApp.Models.ProductSubcategory", b =>
                {
                    b.Property<int>("SubcategoryId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("ProductCategoryId");

                    b.Property<string>("SubcategoryName")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("SubcategoryId");

                    b.HasIndex("ProductCategoryId");

                    b.ToTable("productSubcategories");
                });

            modelBuilder.Entity("PharmacyApp.Models.Label", b =>
                {
                    b.HasOne("PharmacyApp.Models.Product")
                        .WithMany("Labels")
                        .HasForeignKey("ProductId");
                });

            modelBuilder.Entity("PharmacyApp.Models.Product", b =>
                {
                    b.HasOne("PharmacyApp.Models.ProductSubcategory")
                        .WithMany("Products")
                        .HasForeignKey("SubcategoryID")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("PharmacyApp.Models.ProductSubcategory", b =>
                {
                    b.HasOne("PharmacyApp.Models.ProductCategory")
                        .WithMany("Subcategories")
                        .HasForeignKey("ProductCategoryId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
