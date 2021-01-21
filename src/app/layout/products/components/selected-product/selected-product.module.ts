import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectedProductRoutingModule } from './selected-product-routing.module';
import { SelectedProductComponent } from './selected-product.component';


@NgModule({
  declarations: [SelectedProductComponent],
  imports: [
    CommonModule,
    SelectedProductRoutingModule
  ]
})
export class SelectedProductModule { }
