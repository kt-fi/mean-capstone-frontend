import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  productId?:any;
  product?:Product;

  constructor( public activatedRoute:ActivatedRoute, public productService:ProductService) { }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params["pid"];
    this.productService.getProductById(this.productId).subscribe(result => this.product = result);
  }

  submitUpdate(formRef:NgForm):void{
    let pid = this.productId;
    let pname = formRef.value.pname;
    let description = formRef.value.description;
    let price = formRef.value.price;
    let stock = 100;
    let pimage = formRef.value.pimage;
    let offer = false;

    let updateProduct = new Product(pid, pname, description, price, stock, pimage, offer)
    
    this.productService.updateProduct(updateProduct).subscribe(result => console.log(result))
  }

}
