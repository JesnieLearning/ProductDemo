import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ViewDeleteProductComponent } from './products/view-delete-product/view-delete-product.component';
import { AddEditProductComponent } from './products/add-edit-product/add-edit-product.component';
import {SharedService} from "./shared.service"


import {HttpClientModule} from "@angular/common/http";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AllListProductComponent } from './products/all-list-product/all-list-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ViewDeleteProductComponent,
    AddEditProductComponent,
    HomeComponent,
    AllListProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
