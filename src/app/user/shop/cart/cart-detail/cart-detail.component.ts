import { Component, Input, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/models/cart-product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {

  @Input() products?:CartProduct[];
  subTotal?:number[];
  
  get total(){
    return this.productService.cartTotal
  }
  constructor(public productService:ProductService) { }

  ngOnInit(): void {
    console.log(this.productService.cartTotal)
  }

  

}
