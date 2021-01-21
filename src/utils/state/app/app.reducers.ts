import { SidebarState, initialSidebarState, sidebarReducer } from "../../../app/layout/components/sidebar/store/sidebar.reducers";
import { HomeState, homeReducer, initialHomeState } from './../../../app/layout/home/store/home.reducers';
import { ProductsState, productsReducer, initialProductsState } from './../../../app/layout/products/store/products.reducers';
import { ActionReducerMap } from "@ngrx/store";
import { AppActionsEnum } from "./app.actions";

export interface AppState {
    sidebar: SidebarState,
    home: HomeState,
    products: ProductsState,
}


export const initialAppState: AppState = {
    sidebar: initialSidebarState,
    home: initialHomeState,
    products: initialProductsState,
}

export const appReducers: ActionReducerMap<AppState, any> = {
    sidebar: sidebarReducer,
    home: homeReducer,
    products: productsReducer,
}


export function getInitialState(): AppState {
	return initialAppState;
}

export function clearState(reducer) {
	return function (state, action) {
		if (action.type === AppActionsEnum.CLEAR_STORE) {
			state = undefined;
		}
		return reducer(state, action);
	};
}

