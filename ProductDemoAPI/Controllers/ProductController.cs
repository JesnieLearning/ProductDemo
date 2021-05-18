using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProductDemoAPI.Data;
using ProductDemoAPI.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductDemoAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
      

        private readonly ILogger<ProductController> _logger;
        private readonly IProductRespository _repository;

        public ProductController(IProductRespository repository, ILogger<ProductController> logger)
        {
            _logger = logger;
            _repository = repository;
        }

        [HttpGet]
        public IEnumerable<Product> Get()
        {

            return _repository.GetProductAllList();
            
        }

        [HttpGet("GetProductAllList/")]
        public IEnumerable<Product> GetProductAllList()
        {
           
            return _repository.GetProductAllList();
           
        }


        [HttpGet("GetProductByID/{id:int}")]
        public Product GetProductByID(int id)
        {

            return _repository.GetProductByID(id);            
        }

        [HttpPost("UpdateProduct")]
        public JsonResult UpdateProduct(Product updateProduct)
        {
            ResultStatus _resultstatus = new ResultStatus();        

          _resultstatus = _repository.UpdateProduct(updateProduct);
                       
            return new JsonResult(_resultstatus);
            
        }

        [HttpPost("NewProduct")]
        public JsonResult NewProduct(Product newProduct)
        {

            ResultStatus _resultstatus = new ResultStatus();
            _resultstatus = _repository.AddNewProduct(newProduct);
            
            return new JsonResult(_resultstatus);

        }

        [HttpDelete("DeleteProduct/{productid:int}")]
        public JsonResult DeleteProduct(int productid)
        {

            ResultStatus _resultstatus = new ResultStatus();
            _resultstatus = _repository.DeleteProduct(productid);

            return new JsonResult(_resultstatus);

        }
    }
}
