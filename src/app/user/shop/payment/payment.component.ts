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

  get address():any{
    return this.userService.address;
  }

  get total(){
    return this.cartService.cartTotal;
  }

  get products():any{
    return this.cartService.products;
  }

  constructor(public cartService:CartService, public userService:UserServiceService) { }


  ngOnInit(): void {
    this.cartService.getUserCartList(this.uid)
    
  }

}
