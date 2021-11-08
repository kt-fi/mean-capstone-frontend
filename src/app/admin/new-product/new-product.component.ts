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
  message?:any ="";

  placeholderImage:string = "https://media.gettyimages.com/vectors/image-place-holder-with-a-gray-camera-icon-vector-id1226328537?k=20&m=1226328537&s=612x612&w=0&h=2klft8QdMSyDj3oAmFyRyD24Mogj2OygLWrX9Lk6oGQ="
  errorMsg: string = "";

  constructor( public activatedRoute:ActivatedRoute, public productService:ProductService) { }

  ngOnInit(): void {


  }

  submit(formRef:NgForm):void{
    let pname = formRef.value.pname;
    let description = formRef.value.description;
    let price = formRef.value.price;
    let stock = 100;
    let pimage = formRef.value.pimage;
    let offer = false;

    let newProduct = new Product('', pname, description, price, stock, pimage, offer)
    
    this.productService.createNewProduct(newProduct, this.token).subscribe((result) => {
      this.message = result
    }, (err)=> this.errorMsg = "ThHERE HAS BEEN A SERVER ERROR, PLEASE TRY AGAIN LATER")

  }
}
