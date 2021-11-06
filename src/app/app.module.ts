import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { ShopComponent } from './user/shop/shop.component';
import { ProductCardComponent } from './user/shop/product-card/product-card.component';
import { CartComponent } from './user/shop/cart/cart.component';
import { WishListComponent } from './user/shop/wish-list/wish-list.component';
import { CartProductComponent } from './user/shop/cart/cart-product/cart-product.component';
import { CartDetailComponent } from './user/shop/cart/cart-detail/cart-detail.component';
import { AuthGuard } from './guards/auth.guard';
import { PaymentComponent } from './user/shop/payment/payment.component';
import { RouterModule } from '@angular/router';
import { ProductControlComponent } from './admin/product-control/product-control.component';
import { ProductControlCardComponent } from './components/product-control-card/product-control-card.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import { NewProductComponent } from './admin/new-product/new-product.component';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WishListCardComponent } from './user/shop/wish-list/wish-list-card/wish-list-card.component';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    HeaderComponent,
    ShopComponent,
    ProductCardComponent,
    CartComponent,
    WishListComponent,
    CartProductComponent,
    CartDetailComponent,
    PaymentComponent,
    ProductControlComponent,
    ProductControlCardComponent,
    ProductEditComponent,
    NewProductComponent,
    WishListCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgbCollapseModule,
    NgbModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
