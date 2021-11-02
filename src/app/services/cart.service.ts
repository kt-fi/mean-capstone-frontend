import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartProduct } from '../models/cart-product';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartTotal?:number;

  constructor(public http: HttpClient) { }

  addClientAddress(address:any, uid:string):Observable<object>{
     console.log(address)
      return this.http.put(`http://localhost:3001/users/${uid}/addAddress`, {address})
  }
  
  

  getUserCartList(uid:string):Observable<any>{
    let cartList = this.http.get<any>(`http://localhost:3001/cart/getUserCartList/${uid}`)
    return cartList;
  }

  removeItemFromCart(itemId:string, uid:string):Observable<any>{
    let itemRemoved = this.http.delete<any>(`http://localhost:3001/cart/deleteCartItem/${uid}/${itemId}`)
    return itemRemoved;
  }
}
