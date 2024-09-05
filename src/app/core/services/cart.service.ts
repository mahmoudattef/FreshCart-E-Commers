import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor( private _HttpClient:HttpClient) { }

  cartNumber:WritableSignal<number> =signal (0);

  myHeaders:any={token: localStorage.getItem('userToken')}

  addProductsToCard(id:string): Observable<any>{

    return this._HttpClient.post(`${environment.baseUrl}/api/v1/cart`,
      {
        "productId": id
      }
    )
  }

  getProductsCard(): Observable<any>{
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/cart`,
)
  }

  deleteSpecificCardITem(id:string):Observable<any>{
    return this._HttpClient.delete(`${environment.baseUrl}/api/v1/cart/${id}`
    )
  }

  updateProductQuantity(id:string , newCount:number) :Observable<any> {
    return this._HttpClient.put(`${environment.baseUrl}/api/v1/cart/${id}`,
      {
         "count": newCount
      }
    )
  }

  clearCart( ):Observable<any>{
    return this._HttpClient.delete(`${environment.baseUrl}/api/v1/cart`
    )
  }




}
