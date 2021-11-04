import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wish-list-card',
  templateUrl: './wish-list-card.component.html',
  styleUrls: ['./wish-list-card.component.css']
})
export class WishListCardComponent implements OnInit {

  @Input() product:any;
  quantity:number = 1

  constructor() { }

@Output() delete = new EventEmitter()
@Output() add = new EventEmitter()

  ngOnInit(): void {
  }

  deleteFromWishList(product:any):void{
    this.delete.emit(product)
  }

  addToCart(product:any):void{
    this.add.emit(product)
  }
  
}
