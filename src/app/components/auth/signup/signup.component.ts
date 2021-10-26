import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/services/user-service.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserServiceService, public router:Router) { }

  errorMsg:string = "";
  passwordsMatch:boolean = false
  userType:string = ""
  
  ngOnInit(): void {
  }

  enterUserPage(data:any){
    this.userType = data.data.utype;
    this.router.navigate([this.userType])
  }

  submitForm(formRef:NgForm):any{

    let user = new User(formRef.value.uname,  formRef.value.email, "user", formRef.value.password);
    if(formRef.value.password != formRef.value.password2){
      return this.errorMsg = "Passwords must match"
    }
    this.userService.createUser(user).subscribe((result) => {
      if(!result.msg){
      return this.enterUserPage(result)
     }else{
       return this.errorMsg = result.msg
     }
     });
 
   }
 
 }
 