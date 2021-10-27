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
    console.log(this.product)
  }

  addItemToCart(pid:any, quantity:number):void{
    this.productService.addProductToCart({pid, quantity}).subscribe(result => console.log(result))
  }
}
