import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/utils/state/app/app.reducers';
import { ListProducts } from './store/home.actions';
import { ProductList } from 'src/utils/models/ProductList.model';
import { listProductsSelector } from  './store/home.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  productsState: ProductList[];

  ngOnInit(): void {
    this.store.dispatch(new ListProducts());
    this.store.select(listProductsSelector).subscribe((products: ProductList[]) => {
      this.productsState = products;
    })
  }

}
