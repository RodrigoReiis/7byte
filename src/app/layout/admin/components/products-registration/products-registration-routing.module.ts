import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsRegistrationComponent } from './products-registration.component';

const routes: Routes = [
  { path: '', component: ProductsRegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRegistrationRoutingModule { }
