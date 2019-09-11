using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Models;

namespace A4AeroCrud.DTOS
{
    public class ApplicationProfile : Profile
    {
        public ApplicationProfile()
        {
            CreateMap<BusinessCreateDto, BusinessEntity>();
            CreateMap<BusinessEditDto, BusinessEntity>();
        }
    }
}
