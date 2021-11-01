import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { WishlistProduct } from '../models/wishlist-product';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  constructor(public http:HttpClient) { }

  addProductToWishList(data:WishlistProduct, uid:any):Observable<WishlistProduct>{
    let product = this.http.put<WishlistProduct>(`http://localhost:3001/wishList/addProductToWishList/${uid}`, data);
    return product;
  }

  getWishList(uid:string):Observable<WishlistProduct[]>{
    let wishList = this.http.get<WishlistProduct[]>(`http://localhost:3001/wishList/getWishList/${uid}`)
    return wishList;
  }

}
