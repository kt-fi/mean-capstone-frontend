import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ProductsComponent } from './admin/products/products.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { MainComponent } from './components/main/main.component';
import { ShopComponent } from './user/shop/shop.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path:"auth", component: AuthComponent, children:[
    {path:"login", component: LoginComponent},
    {path:"signup", component: SignupComponent},
    {path:"", redirectTo:"signup", pathMatch:"full"}
  ]},
  {path:"dashboard", component: MainComponent, children:[
    {path:"user", component: UserDashboardComponent, children:[
      { path:"shop", component: ShopComponent},
      { path:"", redirectTo: "shop", pathMatch:"full"}
    ]},
    {path:"admin", component: AdminDashboardComponent, children: [
    { path:"products", component: ProductsComponent},
    {path:"", redirectTo:"products", pathMatch:"full"}
  ]},
    
  ]},
  
  {path:"", redirectTo: "auth", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
