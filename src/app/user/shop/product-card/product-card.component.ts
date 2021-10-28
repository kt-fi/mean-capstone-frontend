import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  constructor(private productService:ProductService) { }

  quantity:number = 1

  

  @Input() product?:Product;

  ngOnInit(): void {
   
  }

  addItemToWishList(pid:string):void{
    let uid = localStorage.getItem("uid")
    let data = { pid }
   this.productService.addProductToWishList(data, uid).subscribe(result => console.log(result))
  }

  addItemToCart(pid:any, quantity:number):void{
     let uid = localStorage.getItem("uid")
     let data = { pid, quantity}
    this.productService.addProductToCart(data, uid).subscribe(result => console.log(result))
  }
}
