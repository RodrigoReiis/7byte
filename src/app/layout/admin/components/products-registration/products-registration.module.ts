import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRegistrationRoutingModule } from './products-registration-routing.module';
import { ProductsRegistrationComponent } from './products-registration.component';

@NgModule({
  declarations: [ProductsRegistrationComponent],
  imports: [
    CommonModule,
    ProductsRegistrationRoutingModule
  ],
})
export class ProductsRegistrationModule { }
