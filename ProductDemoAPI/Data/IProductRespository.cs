using ProductDemoAPI.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductDemoAPI.Data
{
    public interface IProductRespository
    {
        IEnumerable<Product> GetProductAllList();
        Product GetProductByID(int Id);
        ResultStatus UpdateProduct(Product updateProduct);
        ResultStatus DeleteProduct(int Id);
        ResultStatus AddNewProduct(Product newProduct);

        bool SaveAll();
    }
}
