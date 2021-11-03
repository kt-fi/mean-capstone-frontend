import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-control',
  templateUrl: './product-control.component.html',
  styleUrls: ['./product-control.component.css']
})
export class ProductControlComponent implements OnInit {

  constructor(public productService:ProductService) { }

  products?:Product[];

  ngOnInit(): void {
    this.productService.getAllProducts(1,200).subscribe(result => this.products = result);
  }

}
