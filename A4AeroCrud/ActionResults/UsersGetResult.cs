using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Models;

namespace A4AeroCrud.ActionResults
{
    public class UsersGetResult
    {
        public ICollection<BusinessEntity> BusinessEntities { get; set; }
        public int TotalEntites { get; set; }
    }
}
