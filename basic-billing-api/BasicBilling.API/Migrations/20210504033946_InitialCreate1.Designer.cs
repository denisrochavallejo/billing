// <auto-generated />
using System;
using BasicBilling.API;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace BasicBilling.API.Migrations
{
    [DbContext(typeof(BasicBillingContext))]
    [Migration("20210504033946_InitialCreate1")]
    partial class InitialCreate1
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.0-preview.3.21201.2");

            modelBuilder.Entity("BasicBilling.API.Bill", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Period")
                        .HasColumnType("TEXT");

                    b.Property<int?>("ServiceId")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("ServiceId");

                    b.ToTable("Bills");
                });

            modelBuilder.Entity("BasicBilling.API.Client", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Clients");
                });

            modelBuilder.Entity("BasicBilling.API.Service", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Category")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Services");
                });

            modelBuilder.Entity("BasicBilling.API.Bill", b =>
                {
                    b.HasOne("BasicBilling.API.Service", "Service")
                        .WithMany()
                        .HasForeignKey("ServiceId");

                    b.Navigation("Service");
                });
#pragma warning restore 612, 618
        }
    }
}
