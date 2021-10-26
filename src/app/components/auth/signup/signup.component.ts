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

  ngOnInit(): void {
  }

  enterUserPage(data:any){
    let userType = data.data.utype;
    this.router.navigate([userType])
  }

  submitForm(formRef:NgForm){
    let user = new User(formRef.value.uname,  formRef.value.email, "user", formRef.value.password);
    this.userService.createUser(user).subscribe(result => this.enterUserPage(result));
  }
}
