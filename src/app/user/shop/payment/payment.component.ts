import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  uid:any = localStorage.getItem("uid")

 address:any;

  get total(){
    return this.cartService.cartTotal;
  }

  get products():any{
    return this.cartService.products;
  }

  constructor(public cartService:CartService, public userService:UserServiceService) { }


  ngOnInit(): void {
    this.cartService.getUserCartList(this.uid)
    this.userService.getUserAddress(this.uid).subscribe(result => this.address = result.address)
  }

  finalizePurchase():void{
    alert("Your Purchase has been processed and will be shipped to: " + this.address)
  }

}
