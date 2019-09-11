using System;
using Contracts;

namespace DAL
{
    public class UnitOfWork : IUnitOfWork
    {
        private DataContext _context;

        public UnitOfWork(DataContext context)
        {
            this._context = context;
            this.BusinessEntityRepository = new BusinessEntityRepository(context);
        }
        public IBusinessEntityRepository BusinessEntityRepository { get; set; }

        private bool disposed = false;

        public void Save()
        {
            _context.SaveChanges();
        }
        protected virtual void Dispose(bool disposing)
        {
            if (!disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }
            this.disposed = true;
        }
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
