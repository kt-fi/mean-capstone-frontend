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

  errorMsg:string = ""

  ngOnInit(): void {
  }

  enterUserPage(data:any){
    let userType = data.user.utype;
    this.router.navigate([userType])
  }

  submitForm(loginRef:NgForm):void{
    this.userService.findUser(loginRef.value).subscribe((result) => {
     if(!result.msg){
      this.enterUserPage(result)
    }else{
      this.errorMsg = result.msg
    }
    });

  }

}
