import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { AddComponent } from './pages/add/add.component';

const routes: Routes = [
  { path: 'list-products', component: ProductsComponent },
  { path: 'add-product', component: AddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
