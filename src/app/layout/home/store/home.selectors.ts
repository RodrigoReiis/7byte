import { createSelector } from "@ngrx/store";
import { HomeState } from "./home.reducers";

import { AppState } from './../../../../utils/state/app/app.reducers';

export const homeSelector = (state: AppState) => state.home;

export const listProductsSelector = createSelector(
  homeSelector,
    (state: HomeState) => state.listProducts,
);
