import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  totalPages: any;
  pageNumber:number = 1;
  productsPerPage:number = 6;
  
  pageUp:boolean = true;
  pageDown:boolean = false;
  products?:Product[];
  uid?:any
  message:string = ""
  errorMessage?:any;
  


  constructor(private productService:ProductService) { }
  
  ngOnInit(): void {

    
  
    this.productService.getAllProducts(1, this.productsPerPage).subscribe((result)=> {
      this.products = result.products 
      this.totalPages = result.totalPages;
      },(err)=> this.errorMessage = "A SERVER ERROR HAS OCCURED, PLEASE TRY AGAIN LATER")
   
  }

  changePage(){
    this.productService.getAllProducts(this.pageNumber, this.productsPerPage).subscribe((result)=> {
      this.products = result.products;
      console.log(result)
      if(this.pageNumber == 1){
        this.pageDown = false;
      }else{
        this.pageDown = true;
      }
      
       if(result.currentPage == this.totalPages){
      this.pageUp = false;
      
    }else{
      this.pageUp = true;
    }},(err)=> {
      this.errorMessage = "A SERVER ERROR HAS OCCURED, PLEASE TRY AGAIN LATER";
      this.products = undefined;
    })

  
  }

  pagePlus(){
    this.pageNumber = this.pageNumber + 1;
    this.changePage()
  }

  pageMinus(){
    this.pageNumber = this.pageNumber - 1;
    this.changePage()
  }

  choosePage(n:number){
    this.pageNumber = n;
    this.changePage();
  }

  pagination(n:number):Array<Number>{
    let totalPages = Array(n)
    return totalPages;
  }


}
