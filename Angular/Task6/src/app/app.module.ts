import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FavoriteProductComponent } from './favorite-product/favorite-product.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { StringSlicePipe } from './_pipes/string-slice.pipe';
import { FilterPipe } from './_pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { ColorsDirective } from './_directive/colors.directive';
import { ForDirective } from './_directive/for.directive';
import { ProductDitlComponent } from './product-ditl/product-ditl.component';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCardComponent,
    FavoriteProductComponent,
    ProductCartComponent,
    StringSlicePipe,
    FilterPipe,
    ColorsDirective,
    ForDirective,
    ProductDitlComponent,
    ErrorComponent,
    UsersListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
