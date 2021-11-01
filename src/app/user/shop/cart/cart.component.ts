import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public cartService:CartService) { }

  uid:any = localStorage.getItem("uid")

  products?:any[];
  msg:string = ""
  ngOnInit(): void {
    this.cartService.getUserCartList(this.uid).subscribe(result =>{ 
      this.products = result})
  }

  removeItemFromCart(itemId:string):void{
    this.cartService.removeItemFromCart(itemId, this.uid).subscribe(result => this.products = result)
  }


}
