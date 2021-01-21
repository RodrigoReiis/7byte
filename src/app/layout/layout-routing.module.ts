import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: LayoutComponent, children: [
    { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'allCategories', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
    { path: 'product/:id', loadChildren: () => import('./products/components/selected-product/selected-product.module').then((module) => module.SelectedProductModule)},
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), children: [
      {path: 'products', loadChildren: () => import('./admin/components/products-registration/products-registration.module').then(m => m.ProductsRegistrationModule)}
    ]},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
