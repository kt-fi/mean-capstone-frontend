import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/models/cart-product';
import { Product } from 'src/app/models/product';
import { WishlistProduct } from 'src/app/models/wishlist-product';
import { ProductService } from 'src/app/services/product.service';
import { WishListService } from 'src/app/services/wish-list.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  uid:any = localStorage.getItem("uid");
  products?:WishlistProduct[];
  quantity:number = 1;
  constructor(public wishListService:WishListService, public productService:ProductService) { }

  ngOnInit(): void {
    this.wishListService.getWishList(this.uid)
    .subscribe(result => this.products = result);
  }

  addToCart(product:any): void{
    let productData = new CartProduct(product.pid, product.pname, product.pimage, this.quantity, product.price);
    let uid = localStorage.getItem("uid")
    this.productService.addProductToCart(productData, uid).subscribe(result => console.log(result));
    this.deleteFromWishList(product);
  }

  deleteFromWishList(product:any):void{ 
    this.wishListService.deleteWishListItem(this.uid, product.id).subscribe(result => {
      this.products = result.products;
    });
    
  }

}
