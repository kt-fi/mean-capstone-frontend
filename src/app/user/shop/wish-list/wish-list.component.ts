import { Component, OnInit } from '@angular/core';
import { WishlistProduct } from 'src/app/models/wishlist-product';
import { WishListService } from 'src/app/services/wish-list.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  uid:any = localStorage.getItem("uid")

  constructor(public wishListService:WishListService) { }

  ngOnInit(): void {
    this.wishListService.getWishList(this.uid).subscribe(result => console.log(result))
  }

}
