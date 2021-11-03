import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {


  token:any = localStorage.getItem("token")
  message?:any;

  constructor( public activatedRoute:ActivatedRoute, public productService:ProductService) { }

  ngOnInit(): void {


  }

  submitUpdate(formRef:NgForm):void{
    let pname = formRef.value.pname;
    let description = formRef.value.description;
    let price = formRef.value.price;
    let stock = 100;
    let pimage = formRef.value.pimage;
    let offer = false;

    let newProduct = new Product('', pname, description, price, stock, pimage, offer)
    
    this.productService.createNewProduct(newProduct, this.token).subscribe(result => this.message = result)

  }
}
