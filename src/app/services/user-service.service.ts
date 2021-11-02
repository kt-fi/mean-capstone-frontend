import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/user';



@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  user?:any;
  username?:string;
  address?:any;

  constructor(public http: HttpClient) { }

 
  createUser(newUser:any):Observable<any>{
    this.user = this.http.post<User>("http://localhost:3001/users/createUser", newUser);
    return this.user;
  }

  findUser(user:any):Observable<any>{
   let data = this.http.post<any>("http://localhost:3001/users/getUser", user);
   this.user = data;
   return this.user;
  }

   getUserAddress(uid:any):Observable<any>{
    let address = this.http.get<any>(`http://localhost:3001/users/getUserAddress/${uid}`)
    return address;
   };
  }

