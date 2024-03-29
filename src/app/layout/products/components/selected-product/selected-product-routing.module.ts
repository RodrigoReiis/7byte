import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectedProductComponent } from './selected-product.component';

const routes: Routes = [
  {path: '', component: SelectedProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectedProductRoutingModule { }
