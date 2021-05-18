import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { ResultStatus } from '../resultstatus';

@Component({
  selector: 'app-all-list-product',
  templateUrl: './all-list-product.component.html',
  styleUrls: ['./all-list-product.component.css']
})
export class AllListProductComponent implements OnInit {


  constructor(private service:SharedService) { }

  prod:any;
  isAllowAddEditProd:boolean=false;
  modaltitle:any;
  ProductsList :any=[];
  responseCode:string;
  isView:boolean=false;
  isAdd:boolean=true;

  ngOnInit(): void {
    this.refreshProductsList();
  }

  refreshProductsList()
  {
    this.service.getAllProductsList().subscribe(data=> 
      {
        this.ProductsList = data;
      });
  }

  addClick(){
    this.isView =false;
    this.isAdd = true;
    this.prod={
      productId:0,
      productName:"",
      price:""
    }
   this.responseCode="";

    this.modaltitle="Add Product";
    this.isAllowAddEditProd=true;

  }

  editClick(dataItem:any){
    this.isView =false;
    this.isAdd = true;
    this.prod={
      productId:dataItem,    
    }
    this.modaltitle="Edit Product";
    this.isAllowAddEditProd=true;
  }

  deleteClick(productid:any){
    if(confirm('Are you sure??')){
      this.service.deleteProduct(productid).subscribe(
        (res)=>{
          var responseResult = <ResultStatus>res;
       alert("Delete Successfully ! Response Code : " + responseResult.StatusCode + " Response Code : " + responseResult.StatusMessage)   ;
        this.refreshProductsList();
      },
      (error)=>
    {      
      alert("ErrorCode:" + error.status + " Message:" +JSON.stringify(error.error));   
      console.log(error.error);
    })
    }
  }

  viewClick(dataItem:any){

    this.isView =true;
    this.isAdd = false;
    this.prod={
      productId:dataItem,    
    }
    this.modaltitle="View Product";
    this.isAllowAddEditProd=true;
  }

  closeClick(){
    this.isView =false;
    this.isAdd = true;
    this.isAllowAddEditProd=false;
    this.refreshProductsList();
  }
}
