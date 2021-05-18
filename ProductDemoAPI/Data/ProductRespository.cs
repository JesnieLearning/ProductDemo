using Microsoft.EntityFrameworkCore;
using ProductDemoAPI.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ProductDemoAPI.Data
{
    public class ProductRespository : IProductRespository
    {
        private readonly DemoDBContext _dbcontext;
        const string SuccessCode = "100";
        const string FailCode = "301";

        const string SuccessMessage = "Success Process";
        const string FailMessage = "Failed Process.";
        public ProductRespository(DemoDBContext dbcontext)
        {
            _dbcontext = dbcontext;

        }

        public IEnumerable<Product> GetProductAllList()
        {
            try
            {
                return _dbcontext.Products
                           .OrderBy(p => p.ID)
                           .ToList();

            }
            catch (Exception ex)
            {

                return null;
            }
        }

        public Product GetProductByID(int Id)
        {
            try
            {
                var resultObj = _dbcontext.Products
                       .Where(p => p.ID == Id)
                       .FirstOrDefault();

                return resultObj;

            }
            catch (Exception ex)
            {

                return null;
            }
        }

        public bool SaveAll()
        {
            try
            {
                return _dbcontext.SaveChanges() > 0;

            }
            catch (Exception ex)
            {

                return false;
            }
        }

        public ResultStatus UpdateProduct(Product updateProduct)
        {
            ResultStatus resultStatus = new ResultStatus();
            try
            {
                var result = _dbcontext.Products.Where(x => x.ID == updateProduct.ID).FirstOrDefault();

                if (result != null) 
                {
                    result.Price = Convert.ToDecimal(updateProduct.Price);
                    result.ProductName = updateProduct.ProductName;
                    result.ProductImg = updateProduct.ProductImg;
                    _dbcontext.Entry(result).State = EntityState.Modified;
                }
                if (_dbcontext.SaveChanges() > 0)
                {
                    resultStatus.StatusCode = SuccessCode;
                    resultStatus.StatusMessage = SuccessMessage;

                }
                return resultStatus;
            }
            catch (Exception ex)
            {

                resultStatus.StatusCode = FailCode;
                resultStatus.StatusMessage = $"{FailMessage} - {ex}";
                return resultStatus;
            }
        }

        public ResultStatus DeleteProduct(int Id)
        {
            ResultStatus resultStatus = new ResultStatus();
            try
            {
                var result = _dbcontext.Products.Where(x => x.ID == Id).FirstOrDefault();

                if (result != null)
                {

                    _dbcontext.Products.Remove(result);
                }
                if (_dbcontext.SaveChanges() >0) 
                {
                    resultStatus.StatusCode = SuccessCode;
                    resultStatus.StatusMessage = SuccessMessage;
                 
                }

                return resultStatus;

            }

            catch (Exception ex)
            {
                resultStatus.StatusCode = FailCode;
                resultStatus.StatusMessage = $"{FailMessage} - {ex}";
                return resultStatus;
            }
        }

        public ResultStatus AddNewProduct(Product newProduct)
        {
            ResultStatus resultStatus = new ResultStatus();
            try
            {
                _dbcontext.Products.Add(newProduct);
                if (_dbcontext.SaveChanges() > 0)
                {
                    resultStatus.StatusCode = SuccessCode;
                    resultStatus.StatusMessage = SuccessMessage;

                }

                return resultStatus;

            }
            catch (Exception ex)
            {

                resultStatus.StatusCode = FailCode;
                resultStatus.StatusMessage = $"{FailMessage} - {ex}";
                return resultStatus;
            }
        }

    }
}
