import { Component, EventEmitter, Input, OnInit, Output, ɵɵqueryRefresh } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {


  uid:any = localStorage.getItem("uid")
  message:string = ""
  @Input() products?:any[];


  constructor(public productService:ProductService, public router:Router) { }


  ngOnInit(): void {
    this.updateTotalCart(this.products)
    this.noItems()
  }

  noItems():string{
    if(this.products?.length == 0){
        this.message ="There are no Items in your Cart";
      }
      return this.message;
  }

  removeItemFromCart(id:string){
    this.productService.removeItemFromCart(id, this.uid).subscribe(result => {
      
      this.products = result.products;
      this.updateTotalCart(result)
      this.noItems()
    });

  
  }

  updateTotalCart(data:any){
    console.log(data)
    let subTotal
    if(data){
      subTotal = data.map((product: { price: number; quantity:number }) => product.price * product.quantity);
    }
    if(subTotal){
      console.log(subTotal)
      this.productService.cartTotal = subTotal.reduce((a: any,b: any) => a+b,0)
    }
  }
}
