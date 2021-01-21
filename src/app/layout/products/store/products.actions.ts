import { Action } from '@ngrx/store'
import { ProductList } from './../../../../utils/models/ProductList.model';

export enum ProductsActionsEnum {
  LIST_PRODUCTS = '[Products] ListProducts',
  FETCH_PRODUCTS = '[Products] FetchProducts',
}

export class ListProducts implements Action {
  readonly type = ProductsActionsEnum.LIST_PRODUCTS;
}

export class FetchProducts implements Action {
  readonly type = ProductsActionsEnum.FETCH_PRODUCTS;
  constructor(public payload: ProductList[]) {}
}

export type ProductsAction = ListProducts | FetchProducts;
