import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-control-card',
  templateUrl: './product-control-card.component.html',
  styleUrls: ['./product-control-card.component.css']
})
export class ProductControlCardComponent implements OnInit {

  @Input() product:any;

  constructor(public productService:ProductService) { }

  ngOnInit(): void {
  }


  editProduct(pid:string):void{
    this.productService.getProductById(pid).subscribe(result => console.log(result))
  }

}
