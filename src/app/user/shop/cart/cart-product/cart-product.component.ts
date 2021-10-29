import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {


  uid:any = localStorage.getItem("uid")

  @Input() products?:any[];

  constructor(public productService:ProductService) { }


  ngOnInit(): void {
    this.updateTotalCart(this.products)
  }

  removeItemFromCart(id:string){
    this.productService.removeItemFromCart(id, this.uid).subscribe(result => {
      this.products = result
      this.updateTotalCart(result)
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
