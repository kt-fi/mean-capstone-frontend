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

  getProductById(pid:string):Observable<Product>{
    return this.http.get<Product>(`http://localhost:3001/products/getProductById/${pid}`)
  }

  createNewProduct(data:any, token:string):Observable<Product>{
    let newProduct = this.http.post<Product>(`http://localhost:3001/products/createProduct`, data,  {headers: {"Authorization" : token}});
    return newProduct;
  }

  updateProduct(product:Product):Observable<Product>{
    let updatedProduct = this.http.put<Product>(`http://localhost:3001/products/editProduct/${product.pid}`, product);
    return updatedProduct;
  }

  deleteProduct(pid:string, token:string):Observable<any>{
    let deletedProduct = this.http.delete<any>(`http://localhost:3001/products/deleteById/${pid}`,  {headers: {"Authorization" : token}});
    return deletedProduct;
  }
  
}
