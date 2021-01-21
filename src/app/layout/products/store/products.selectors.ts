import { createSelector } from "@ngrx/store";
import { ProductsState } from "./products.reducers";

import { AppState } from './../../../../utils/state/app/app.reducers';

export const productsSelector = (state: AppState) => state.products;

export const listProductsSelector = createSelector(
  productsSelector,
    (state: ProductsState) => state.listProducts,
);
