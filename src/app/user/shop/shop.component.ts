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
  pageNumber:number = 1;
  productsPerPage:number = 3;
  pageUp:boolean = true;
  pageDown:boolean = true;
  products?:Product[];
  uid?:any
  ngOnInit(): void {

    
  
    this.productService.getAllProducts(1, 1).subscribe(result=> {this.products = result; console.log(this.products)})
   
  }

  changePage(){
    this.productService.getAllProducts(this.pageNumber, this.productsPerPage).subscribe(result=> {
      this.products = result;
      if(this.pageNumber == 1){
        this.pageDown = false;
      }else{
        this.pageDown = true;
      }
      
       if(result.length < this.productsPerPage){
      this.pageUp = false;
      
    }else{
      this.pageUp = true;
    }})

  
  }

  pagePlus(){
    this.pageNumber = this.pageNumber + 1;
    this.changePage()
  }

  pageMinus(){
    this.pageNumber = this.pageNumber - 1;
    this.changePage()
  }
}
