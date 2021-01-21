import { ProductList } from "../../../../utils/models/ProductList.model";
import { ProductsAction, ProductsActionsEnum } from "./products.actions";

export interface ProductsState {
  listProducts: ProductList[];
}

export const initialProductsState: ProductsState = {
  listProducts: [],
}

export function productsReducer(state = initialProductsState, action: ProductsAction): ProductsState {
  switch(action.type) {
      case (ProductsActionsEnum.FETCH_PRODUCTS): {
          return {
            listProducts: action.payload,
          }
      }

      default:
          return state;
  }
}
