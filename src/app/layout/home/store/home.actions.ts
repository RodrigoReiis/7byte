import { Action } from '@ngrx/store';
import { ProductList } from './../../../../utils/models/ProductList.model';

export enum HomeActionsEnum {
    LIST_PRODUCTS = '[HOME] ListProducts',
    FETCH_PRODUCTS = '[HOME] FetchProducts',
}

export class ListProducts implements Action {
    readonly type = HomeActionsEnum.LIST_PRODUCTS;
}

export class FetchProducts implements Action {
    readonly type = HomeActionsEnum.FETCH_PRODUCTS;
    constructor(public payload: ProductList[]) { }
}

export type HomeAction = ListProducts | FetchProducts;