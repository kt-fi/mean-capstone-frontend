import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartProduct } from 'src/app/models/cart-product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {

  @Input() products?:CartProduct[];
  subTotal?:number[];
  
  address:any;

  get total(){
    return this.productService.cartTotal
  }

  uid:any = localStorage.getItem("uid");

  constructor(public productService:ProductService, public cartService:CartService) { }

  ngOnInit(): void {
    console.log(this.productService.cartTotal)
  }

  addressRef = new FormGroup({
    street: new FormControl(),
    city: new FormControl(),
    zip: new FormControl(),
    country: new FormControl(),
  })

  submitForm():void{
    let address = this.addressRef.value
    this.cartService.addClientAddress(address, this.uid).subscribe(result => console.log(result))
  }

  

}