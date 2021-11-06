import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from '../../environments/environment';
import { CartProduct } from '../models/cart-product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {



  constructor(private http:HttpClient, ) { }

  getAllProducts(page:number, limit:number):Observable<any>{
    let products = this.http.get<any>(`${environment.apiUrl}/products/getAllProducts?page=${page}&limit=${limit}`);
    return products;
  }

  addProductToCart(data:any, uid:any):Observable<Product>{
    let product = this.http.put<Product>(`${environment.apiUrl}/cart/addProductToCart/${uid}`, data);
    return product;
  }

  getProductById(pid:string):Observable<Product>{
    return this.http.get<Product>(`${environment.apiUrl}/products/getProductById/${pid}`)
  }

  createNewProduct(data:any, token:string):Observable<Product>{
    let newProduct = this.http.post<Product>(`${environment.apiUrl}/products/createProduct`, data,  {headers: {"Authorization" : token}});
    return newProduct;
  }

  updateProduct(product:Product, token:string):Observable<Product>{
    let updatedProduct = this.http.put<Product>(`${environment.apiUrl}/products/editProduct/${product.pid}`, product,  {headers: {"Authorization" : token}});
    return updatedProduct;
  }

  deleteProduct(pid:string, token:string):Observable<Product>{
    let deletedProduct = this.http.delete<Product>(`${environment.apiUrl}/products/deleteById/${pid}`,  {headers: {"Authorization" : token}});
    return deletedProduct;
  }
  
}
