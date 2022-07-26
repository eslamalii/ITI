import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FavoriteProductComponent } from './favorite-product/favorite-product.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { ProductPipsComponent } from './product-pips/product-pips.component';
import { StringSlicePipe } from './_pipes/string-slice.pipe';
import { FilterPipe } from './_pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { ColorsDirective } from './_directive/colors.directive';
import { ForDirective } from './_directive/for.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCardComponent,
    FavoriteProductComponent,
    ProductCartComponent,
    ProductPipsComponent,
    StringSlicePipe,
    FilterPipe,
    ColorsDirective,
    ForDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
