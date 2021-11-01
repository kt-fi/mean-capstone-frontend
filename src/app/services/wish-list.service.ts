import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartProduct } from '../models/cart-product';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  constructor(public http:HttpClient) { }

  addProductToWishList(data:CartProduct, uid:any):Observable<CartProduct>{
    let product = this.http.put<CartProduct>(`http://localhost:3001/users/addProductToWishList/${uid}`, data);
    return product;
  }

}
