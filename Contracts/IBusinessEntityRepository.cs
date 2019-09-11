using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using Models;

namespace Contracts
{
    public interface IBusinessEntityRepository
    {
        BusinessEntity Get(int id);
        void Edit(BusinessEntity bs);
        IEnumerable<BusinessEntity> GetAll();
        IEnumerable<BusinessEntity> Find(Expression<Func<BusinessEntity, bool>> predicate);
        IEnumerable<BusinessEntity> Find(Expression<Func<BusinessEntity, bool>> predicate, int pageNumber, int pageSize);
        IEnumerable<BusinessEntity> Find(int pageNumber = 1, int pageSize = 5);
        BusinessEntity SingleOrDefault(Expression<Func<BusinessEntity, bool>> predicate);
        void Add(BusinessEntity entity);
        void AddRange(IEnumerable<BusinessEntity> entities);
        int GetCount(Expression<Func<BusinessEntity, bool>> filter = null);
        void Remove(BusinessEntity entity);
        void RemoveRange(IEnumerable<BusinessEntity> entities);
    }
}