using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Contracts;
using Microsoft.EntityFrameworkCore;
using Models;

namespace DAL
{
    public class BusinessEntityRepository:Repository<BusinessEntity>, IBusinessEntityRepository
    {
        public BusinessEntityRepository(DbContext context):base(context)
        {
            
        }
        public void Edit(BusinessEntity bs)
        {
            var editedEntity = Context.Update(bs);
                //Context.Set<BusinessEntity>().FirstOrDefault(e => e.BusinessId == bs.BusinessId);
                //_context.Set<TEntity>().FirstOrDefault(e => e.Id == entity.Id);
        }
    }
}
