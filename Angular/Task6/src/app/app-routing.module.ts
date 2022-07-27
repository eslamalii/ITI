import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ProductDitlComponent } from './product-ditl/product-ditl.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'productditl/:id', component: ProductDitlComponent },
  { path: 'users', component: UsersListComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  {
    path: 'product',
    loadChildren: () =>
      import('./product/product.module').then((m) => m.ProductModule),
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
