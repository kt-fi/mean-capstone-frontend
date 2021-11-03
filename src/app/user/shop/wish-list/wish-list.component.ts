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


  message:string = ""
  uid:any = localStorage.getItem("uid");
  products?:WishlistProduct[];
  quantity:number = 1;
  constructor(public wishListService:WishListService, public productService:ProductService) { }

  ngOnInit(): void {
    this.wishListService.getWishList(this.uid)
    .subscribe(result =>{ 
      this.products = result;
      this.noItems()
    });
      
  }

  addToCart(product:any): void{
    let productData = new CartProduct(product.pid, product.pname, product.pimage, this.quantity, product.price);
    let uid = localStorage.getItem("uid")
    this.productService.addProductToCart(productData, uid).subscribe(result => console.log(result));
    this.deleteFromWishList(product, true);
  }

  deleteFromWishList(product:any, addedToCart:boolean = false):void{ 
    this.wishListService.deleteWishListItem(this.uid, product.id).subscribe(result => {

      addedToCart ? this.message = `Your product has been Added To cart!!` :  this.message = `Your Item has been delete from wishlist`;
      
      setTimeout(()=>{
        this.message = "";
      },3000)
      this.products = result.products;
      setTimeout(()=>{
        this.noItems()
      },3001)
    });
    
  }

  noItems():string{
    if(this.products?.length == 0){
        this.message ="There are no Items in your Cart";
      }
      return this.message;
  }
}
