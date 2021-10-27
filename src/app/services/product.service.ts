import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<Product[]>{
    let products = this.http.get<Product[]>("http://localhost:3001/products/getAllProducts");
    return products;
  }

  addProductToCart(data:any):Observable<Product>{
    let product = this.http.put<Product>("http://localhost:3001/users/addProductToCart/d295976848c", data);
    return product;
  }

}
