import { Component, EventEmitter, Input, OnInit, Output, ɵɵqueryRefresh } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {


  uid:any = localStorage.getItem("uid");

  message:string = "";

  @Input() products?:any[];


  constructor(public cartService:CartService, public router:Router) { }


  ngOnInit(): void {
    this.cartService.updateTotalCart(this.products)
    setTimeout(()=>{
      this.noItems()
    },0) 
  }

  noItems():string{
    if(this.products?.length == 0){
        this.message ="There are no Items in your Cart";
      }
      return this.message;
  }

  removeItemFromCart(id:string){
    this.cartService.removeItemFromCart(id, this.uid).subscribe(result => {
      this.message = `Your product has been removed from the cart!!`;
      setTimeout(()=>{
        this.message = "";
      },3000)
      this.products = result.products;
      // this.updateTotalCart(result.products)
      setTimeout(()=>{
        this.noItems()
      },3001) 
      this.cartService.updateTotalCart(result.products)
    },(err)=> this.message = "A SERVER ERROR HAS OCCURED, PLEASE TRY AGAIN");
  }
}
