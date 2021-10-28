import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { CartProduct } from '../models/cart-product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient, ) { }

  getAllProducts():Observable<Product[]>{
    let products = this.http.get<Product[]>("http://localhost:3001/products/getAllProducts");
    return products;
  }

  addProductToCart(data:any, uid:any):Observable<Product>{
    let product = this.http.put<Product>(`http://localhost:3001/cart/addProductToCart/${uid}`, data);
    return product;
  }

  getUserCartList(uid:string):Observable<any>{
    let cartList = this.http.get<any>(`http://localhost:3001/cart/getUserCartList/${uid}`)
    return cartList;
  }

  removeItemFromCart(itemId:string, uid:string):Observable<any>{
    let itemRemoved = this.http.delete<any>(`http://localhost:3001/cart/deleteCartItem/${uid}/${itemId}`)
    return itemRemoved;
  }
  
  addProductToWishList(data:CartProduct, uid:any):Observable<Product>{
    let product = this.http.put<Product>(`http://localhost:3001/users/addProductToWishList/${uid}`, data);
    return product;
  }

 
}
