using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Models;

namespace DAL
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        public DbSet<BusinessEntity> BusinessEntities { get; set; }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<BusinessEntity>()
                .Property(b => b.CreatedOnUtc)
                .ValueGeneratedOnAdd();
            modelBuilder.Entity<BusinessEntity>()
                .Property(b => b.UpdatedOnUtc)
                .ValueGeneratedOnAddOrUpdate();
        }
    }
}
