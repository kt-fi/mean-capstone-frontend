import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/user';



@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  user?:any;

  constructor(public http: HttpClient) { }

 
  createUser(newUser:User):Observable<User>{
    this.user = this.http.post<User>("http://localhost:3001/users/createUser", newUser);
    return this.user;
  }

  findUser(user:any):Observable<any>{
    console.log(user)
   this.user = this.http.post<any>("http://localhost:3001/users/getUser", user);
   return this.user;
  }
}
