import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';

const routes: Routes = [
  {path:"auth", component: AuthComponent, children:[
    {path:"login", component: LoginComponent},
    {path:"signup", component: SignupComponent},
    {path:"", redirectTo:"login", pathMatch:"full"}
  ]},
  {path:"", redirectTo: "auth", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
