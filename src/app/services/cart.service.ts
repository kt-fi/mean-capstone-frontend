import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartProduct } from '../models/cart-product';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  constructor(public http: HttpClient) { }

  addClientAddress(address:any, uid:string):Observable<object>{
     console.log(address)
      return this.http.put(`http://localhost:3001/users/${uid}/addAddress`, {address})
  }
}
