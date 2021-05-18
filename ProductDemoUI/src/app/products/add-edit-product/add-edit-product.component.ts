import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { ResultStatus } from '../resultstatus';


@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() prod:any;
  productId: string;
  productName:string;
  price: string;
  returnresponse:string;
  responseCode:string;


  ngOnInit(): void {
  
    this.productId=this.prod.productId;
    this.productName=this.prod.productName;
    this.price=this.prod.price;
  
    if(this.prod.productId>0)
    {    
      this.service.getProductByID(this.prod.productId).subscribe(
        (data)=> 
        {           
      
          this.productId= data.ID;          
          this.productName= data.ProductName;
          this.price= data.Price;
        
        },(error)=>
        {                   
          alert(JSON.stringify(error.error));    
        });
    }
  }

  addProduct(){

    this.responseCode ="";
    var val = {ProductionID:0,ProductName:this.productName,
                Price:this.price};
               
    this.service.addNewProduct(val).subscribe((res)=>{
  
      var result = <ResultStatus>res;
      this.responseCode = result.StatusCode ;
      this.returnresponse = result.StatusCode + "-" + result.StatusMessage;        
    },(error)=>
    {
      
      this.returnresponse = "Error Code:" +error.status + " Message:" +JSON.stringify(error.error);
      console.log(error.error);

    });
  }

  updateProduct(){
    this.responseCode ="";
    var val = {ID:this.productId,
      ProductName:this.productName,
      Price:this.price};
    this.service.updateProduct(val).subscribe((res)=>{
  
      var result = <ResultStatus>res
      this.responseCode = result.StatusCode ;
      this.returnresponse = result.StatusCode + "-" + result.StatusMessage;        
    },(error)=>
    {
      
      this.returnresponse = "Error Code:" +error.status + " Message:" +JSON.stringify(error.error);
      console.log(error.error);

    });
  }
  public getColor(responseCode:string): string{

    return   responseCode =="100" ? "green" : "red";
 }
}
