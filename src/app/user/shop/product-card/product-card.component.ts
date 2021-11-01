import { Component, Input, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/models/cart-product';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';



@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  constructor(private cartService:CartService) { }

  quantity:number = 0

  

  @Input() product?:Product;

  ngOnInit(): void {
   
  }

  addItemToWishList(product:object):void{
  //   let uid = localStorage.getItem("uid")
  //   let data = { product }
  //  this.productService.addProductToWishList(data, uid).subscribe(result => console.log(result))
  }

  addItemToCart(product:Product):void{
    let productData = new CartProduct(product.pid, product.pname, product.pimage, this.quantity, product.price);
    let uid = localStorage.getItem("uid")
    this.cartService.addProductToCart(productData, uid).subscribe(result => console.log(result))
  }
}
