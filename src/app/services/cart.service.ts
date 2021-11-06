import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CartProduct } from '../models/cart-product';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  address?:any = null
  products?:any;
  cartTotal?:number;
  cartInfo?:any;
  errorMessage?:string;

  constructor(public http: HttpClient) { }

  addClientAddress(address:object, uid:string){
      this.http.put(`${environment.apiUrl}/users/${uid}/addAddress`, {address}).subscribe((result) => {this.address = result},
      (err)=> this.errorMessage = "A SERVER ERROR HAS OCCURED, PLEASE TRY AGAIN")
  }
  
  getUserCartList(uid:string){
   this.http.get<CartProduct>(`${environment.apiUrl}/cart/getUserCartList/${uid}`).subscribe((result) =>{
     this.products = result
     this.updateTotalCart(result)
    },(err)=> this.errorMessage = "A SERVER ERROR HAS OCCURED, PLEASE TRY AGAIN")
   
  }

  updateTotalCart(data:any){
    let subTotal
    if(data){
      subTotal = data.map((product: { price: number; quantity:number }) => product.price * product.quantity);
    }
    if(subTotal){
      this.cartTotal = subTotal.reduce((a: number, b: number) => a+b,0)
    }
  }

  removeItemFromCart(itemId:string, uid:string):Observable<any>{
    let itemRemoved = this.http.delete<any>(`${environment.apiUrl}/cart/deleteCartItem/${uid}/${itemId}`)
    return itemRemoved;
  }
}
