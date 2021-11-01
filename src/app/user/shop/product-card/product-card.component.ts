import { Component, Input, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/models/cart-product';
import { Product } from 'src/app/models/product';
import { WishlistProduct } from 'src/app/models/wishlist-product';
import { CartService } from 'src/app/services/cart.service';
import { WishListService } from 'src/app/services/wish-list.service';



@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  constructor(private cartService:CartService, public wishlistService:WishListService) { }

  quantity:number = 0

  

  @Input() product?:Product;

  ngOnInit(): void {
   
  }

  addItemToWishList(product:Product):void{
    let productData = new WishlistProduct(product.pid, product.pname, product.pimage)
    let uid = localStorage.getItem("uid")
   this.wishlistService.addProductToWishList(productData, uid).subscribe(result => console.log(result))
  }

  addItemToCart(product:Product):void{
    let productData = new CartProduct(product.pid, product.pname, product.pimage, this.quantity, product.price);
    let uid = localStorage.getItem("uid")
    this.cartService.addProductToCart(productData, uid).subscribe(result => console.log(result))
  }
}
