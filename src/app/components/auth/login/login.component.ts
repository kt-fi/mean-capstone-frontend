import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userService:UserServiceService, public router:Router) { }

  errorMsg:string = "";
  userType?:string;
  uid?:string;
  ngOnInit(): void {
  }

  enterUserPage(data:any){
    this.userType = data.user.utype;
    this.uid = data.user.uid
    this.userService.user = data.user;
    localStorage.setItem("user", data.user.uname)
    localStorage.setItem("uid", data.user.uid)
    localStorage.setItem("token", data.token)
    localStorage.setItem("usertype", data.user.utype)
    this.userService.username = data.user.uname;
    this.router.navigate([`dashboard/${this.userType}`])
  }

  submitForm(loginRef:NgForm):void{
    this.userService.findUser(loginRef.value).subscribe((result) => {
      console.log(result)
     if(!result.msg){
      this.enterUserPage(result)
    }else{
      this.errorMsg = result.msg
    }
    }, (err)=> this.errorMsg = "THERE HAS BEEN A SERVER ERROR, PLEASE TRY AGAIN LATER");

  }

}
