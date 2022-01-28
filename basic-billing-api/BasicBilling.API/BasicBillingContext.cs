using System;
using Microsoft.EntityFrameworkCore;


namespace BasicBilling.API
{
    public class BasicBillingContext : DbContext
    {
        public BasicBillingContext(DbContextOptions<BasicBillingContext> options)
            : base(options)
        {
        }

        public DbSet<Bill> Bills { get; set; }

        public DbSet<Client> Clients { get; set; }

        public DbSet<Service> Services { get; set; }

        public DbSet<Billing> Billings { get; set; }        
    }
}
