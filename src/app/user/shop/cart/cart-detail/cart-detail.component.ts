import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartProduct } from 'src/app/models/cart-product';
import { User } from 'src/app/models/user';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {

  @Input() products?:CartProduct[];
  subTotal?:number[];
  
  address?:any;

  get user():User{
    return this.userService.user;
  }

  get total(){
    return this.cartService.cartTotal
  }

  uid:any = localStorage.getItem("uid");

  constructor(public productService:ProductService, public cartService:CartService, public userService:UserServiceService) { }

  ngOnInit(): void {
    console.log(this.user)
  }

  addressRef = new FormGroup({
    fullName: new FormControl(),
    street: new FormControl(),
    city: new FormControl(),
    zip: new FormControl(),
    country: new FormControl(),
  })

  submitForm():void{
    let address = this.addressRef.value
    this.cartService.addClientAddress(address, this.uid).subscribe(result => this.address = result)
  }

  changeAddress():void{
     this.address = null;
  }

  

}
