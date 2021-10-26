import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path:"auth", component: AuthComponent, children:[
    {path:"login", component: LoginComponent},
    {path:"signup", component: SignupComponent},
    {path:"", redirectTo:"signup", pathMatch:"full"}
  ]},
  {path:"admin", component: AdminDashboardComponent},
  {path:"user", component: UserDashboardComponent},
  {path:"", redirectTo: "auth", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
