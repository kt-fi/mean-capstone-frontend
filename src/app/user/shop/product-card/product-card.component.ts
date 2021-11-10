import { Component, Input, OnInit, Output } from '@angular/core';
import { CartProduct } from 'src/app/models/cart-product';
import { Product } from 'src/app/models/product';
import { WishlistProduct } from 'src/app/models/wishlist-product';
import { ProductService } from 'src/app/services/product.service';
import { WishListService } from 'src/app/services/wish-list.service';
import { EventEmitter } from '@angular/core';



@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  constructor(private productService:ProductService, public wishlistService:WishListService) { }

  quantity:number = 0;
  errorMessage:string = ""

  @Input() product?:Product;

  ngOnInit(): void {

  }

  addItemToWishList(product:Product):void{
    let productData = new WishlistProduct(product.pid, product.pname, product.pimage, product.price)
    let uid = localStorage.getItem("uid")
   this.wishlistService.addProductToWishList(productData, uid).subscribe((result) => {
     console.log(result)
    },(err)=> alert("there has been a server error, pleas try again later!"))              
  }

  addItemToCart(product:Product):void{
    let productData = new CartProduct(product.pid, product.pname, product.pimage, this.quantity, product.price);
    let uid = localStorage.getItem("uid")
    this.productService.addProductToCart(productData, uid).subscribe((result) => {
    },(err)=> alert("there has been a server error, pleas try again later!"))
  }
}
