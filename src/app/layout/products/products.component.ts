import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductList } from 'src/utils/models/ProductList.model';
import { AppState } from 'src/utils/state/app/app.reducers';
import { Store } from '@ngrx/store';
import { SidebarLink } from 'src/utils/models/SidebarLink.model';
import { listSidebarSelector } from '../components/sidebar/store/sidebar.selectors';
import { ListProducts } from './store/products.actions';
import { listProductsSelector } from './store/products.selectors';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  selectedProduct: ProductList[];
  selectedRoute: string;
  menuLinks: SidebarLink[];

  constructor(private store: Store<AppState>, private router: Router) {
    this.selectedRoute = this.router.url;
    this.selectedRoute = this.selectedRoute.replace('/', '');
    this.selectedRoute = this.selectedRoute.substring(0, 1).toUpperCase() + this.selectedRoute.substring(1);
    if(this.selectedRoute === 'AllCategories') this.selectedRoute = 'Todas as Categorias'
  }

  ngOnInit(): void {
    this.store.dispatch(new ListProducts());
    this.store.select(listProductsSelector).subscribe(async (products: ProductList[]) => {
      this.selectedProduct = await products;
    })
    this.store.select(listSidebarSelector).subscribe(async (links: SidebarLink[]) => {
      this.menuLinks = await links;
    });
  }

}
