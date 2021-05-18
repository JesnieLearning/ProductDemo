import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { ResultStatus } from '../resultstatus';


@Component({
  selector: 'app-view-delete-product',
  templateUrl: './view-delete-product.component.html',
  styleUrls: ['./view-delete-product.component.css']
})
  

 export class ViewDeleteProductComponent implements OnInit {

 

  constructor(private service:SharedService) {
  }
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
          alert("ErrorCode:" + error.status + " Message:" +JSON.stringify(error.error));    
        });
    }
  }


}

