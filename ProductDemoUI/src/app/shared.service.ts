import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {Observable, throwError} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl ="http://localhost:57772/api";

  constructor(private http:HttpClient) 
  { }

  getAllProductsList():Observable<any[]>
  {
    return this.http.get<any>(this.APIUrl+'/Product/GetProductAllList').pipe(catchError(this.handleError));
  }

  getProductByID(val : any):Observable<any>
  {
    return this.http.get<any>(this.APIUrl+'/Product/GetProductByID/'+val).pipe(catchError(this.handleError));
  }
  addNewProduct(val : any)
  {
    return this.http.post(this.APIUrl +'/Product/NewProduct',val).pipe(catchError(this.handleError));
  }

  updateProduct(val : any)
  {
    return this.http.post(this.APIUrl +'/Product/UpdateProduct',val).pipe(catchError(this.handleError));
  }

  deleteProduct(val : any)
  {
    return this.http.delete(this.APIUrl +'/Product/DeleteProduct/'+val).pipe(catchError(this.handleError));
  }
  
 handleError(error: HttpErrorResponse) {
   return throwError(error);
}


}
