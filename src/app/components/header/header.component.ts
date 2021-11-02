import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public userService:UserServiceService) { }
  


  get username():any{
    return this.userService.username;
  }

  ngOnInit(): void {
  }

  logout():void{
    localStorage.removeItem("user");
    localStorage.removeItem("uid");
    localStorage.removeItem("token")
    this.userService.username=""
    window.location.replace('/logout');
  }
}
