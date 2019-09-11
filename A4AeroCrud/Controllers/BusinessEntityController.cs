using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using A4AeroCrud.ActionResults;
using A4AeroCrud.DTOS;
using AutoMapper;
using Contracts;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace A4AeroCrud.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BusinessEntityController : ControllerBase
    {
        private IUnitOfWork _uow;
        private IMapper _mapper;

        public BusinessEntityController(IUnitOfWork uow,IMapper mapper)
        {
            this._uow = uow;
            this._mapper = mapper;
        }
        // GET: api/BusinessEntity
        [HttpGet]
        public async Task<IActionResult> Get(int pageNumber=1)
        {
            int tot = this._uow.BusinessEntityRepository.GetCount();
            var lists = this._uow.BusinessEntityRepository.Find(pageNumber);
            var res = new UsersGetResult()
            {
                BusinessEntities = lists.ToList(),
                TotalEntites = tot
            };
            return Ok(res);
        }
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] BusinessCreateDto en)
        {
            var model = this._mapper.Map<BusinessEntity>(en);
            this._uow.BusinessEntityRepository.Add(model);
            this._uow.Save();
            return Ok(model);
        }

        public async Task<IActionResult> Update([FromBody] BusinessEditDto dto)
        {
            var model = this._mapper.Map<BusinessEntity>(dto);
            this._uow.BusinessEntityRepository.Edit(model);
            this._uow.Save();
            return Ok(model);
        }
        [HttpGet]
        [Route("details")]
        public async Task<IActionResult> Details(int id)
        {
            var res = _uow.BusinessEntityRepository.Get(id);
            return Ok(res);
        }

        [HttpDelete]
        public async Task<IActionResult> Delete(int id)
        {
            var mod = _uow.BusinessEntityRepository.Get(id);
            this._uow.BusinessEntityRepository.Remove(mod);
            this._uow.Save();
            return Ok();
        }

        // GET: api/BusinessEntity/5
        

        // POST: api/BusinessEntity
        

        // PUT: api/BusinessEntity/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        
    }
}
