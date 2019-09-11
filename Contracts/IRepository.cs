using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Contracts
{
    public interface IRepository<TEntity> where TEntity : class
    {
        TEntity Get(int id);
        IEnumerable<TEntity> GetAll();
        IEnumerable<TEntity> Find(Expression<Func<TEntity, bool>> predicate);
        IEnumerable<TEntity> Find(Expression<Func<TEntity, bool>> predicate, int pageNumber, int pageSize);
        IEnumerable<TEntity> Find(int pageNumber = 1, int pageSize = 5);
        TEntity SingleOrDefault(Expression<Func<TEntity, bool>> predicate);
        void Add(TEntity entity);
        void AddRange(IEnumerable<TEntity> entities);
        int GetCount(Expression<Func<TEntity, bool>> filter = null);
        void Remove(TEntity entity);
        void RemoveRange(IEnumerable<TEntity> entities);
    }
}