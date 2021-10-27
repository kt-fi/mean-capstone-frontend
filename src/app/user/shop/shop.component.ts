import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private productService:ProductService) { }

  products?:Product[];

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(result=> {this.products = result; console.log(this.products)})
   
  }

}
