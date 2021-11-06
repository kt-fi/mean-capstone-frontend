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

  addClientAddress(address:any, uid:string){
     console.log(address)
      this.http.put(`${environment.apiUrl}/users/${uid}/addAddress`, {address}).subscribe((result) => {this.address = result},
      (err)=> this.errorMessage = "A SERVER ERROR HAS OCCURED, PLEASE TRY AGAIN")
  }
  

  
  getUserCartList(uid:string){
   this.http.get<any>(`${environment.apiUrl}/cart/getUserCartList/${uid}`).subscribe((result) =>{
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
    
      console.log(subTotal)
      this.cartTotal = subTotal.reduce((a: any,b: any) => a+b,0)
    }
  }


  // getUserCartList(uid:string):Observable<any>{
  //   let cartList = this.http.get<any>(`http://localhost:3001/cart/getUserCartList/${uid}`)
  //   return cartList;
  // }


  // removeItemFromCart(itemId:string, uid:string){
  //   this.http.delete<any>(`http://localhost:3001/cart/deleteCartItem/${uid}/${itemId}`).subscribe(result => {
  //     this.products = result;
  //     this.updateTotalCart(result)
  //   })
   
  // }


  removeItemFromCart(itemId:string, uid:string):Observable<any>{
    let itemRemoved = this.http.delete<any>(`http://localhost:3001/cart/deleteCartItem/${uid}/${itemId}`)
    return itemRemoved;
  }

 


}
