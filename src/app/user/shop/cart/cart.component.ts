import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/models/cart-product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public productService:ProductService) { }

  uid:any = localStorage.getItem("uid")

  products?:any[];
  msg:string = ""
  ngOnInit(): void {
    this.productService.getUserCartList(this.uid).subscribe(result =>{ 
      console.log(result)
      this.products = result})
  }

  removeItemFromCart(itemId:string):void{
    this.productService.removeItemFromCart(itemId, this.uid).subscribe(result => this.products = result)
  }


}
