import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { NewProductComponent } from './admin/new-product/new-product.component';
import { ProductControlComponent } from './admin/product-control/product-control.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { MainComponent } from './components/main/main.component';
import { AuthGuard } from './guards/auth.guard';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { CartComponent } from './user/shop/cart/cart.component';
import { PaymentComponent } from './user/shop/payment/payment.component';
import { ShopComponent } from './user/shop/shop.component';
import { WishListComponent } from './user/shop/wish-list/wish-list.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path:"auth", component: AuthComponent, children:[
    {path:"login", component: LoginComponent},
    {path:"signup", component: SignupComponent},
    {path:"", redirectTo:"signup", pathMatch:"full"}
  ]},
  {path:"dashboard", component: MainComponent, canActivate:[AuthGuard], children:[
    {path:"user", component: UserDashboardComponent, children:[
      { path:"shop", component: ShopComponent},
      { path:"cart", component: CartComponent},
      { path:"wishList", component: WishListComponent},
      { path: "payment", component: PaymentComponent},
      { path:"", redirectTo: "shop", pathMatch:"full"}
    ]},
    {path:"admin", component: AdminDashboardComponent, children: [
      { path:"productControl", component: ProductControlComponent, canActivate:[AuthGuard]},
      { path: "editProduct/:pid", component: ProductEditComponent},
      { path: "addNewProduct", component: NewProductComponent},
      { path:"", redirectTo:"productControl", pathMatch:"full"}
  ]},
  ]},
  { path:"logout", redirectTo:"auth", pathMatch: "full"},
  
  {path:"", redirectTo: "auth", pathMatch:"full"},
  {path: "**", component:NoPageFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
