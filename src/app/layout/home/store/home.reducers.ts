import { ProductList } from "../../../../utils/models/ProductList.model";
import { HomeAction, HomeActionsEnum } from "./home.actions";

export interface HomeState {
  listProducts: ProductList[];
}

export const initialHomeState: HomeState = {
  listProducts: [],
}

export function homeReducer(state = initialHomeState, action: HomeAction): HomeState {
  switch(action.type) {
      case (HomeActionsEnum.FETCH_PRODUCTS): {
          return {
            listProducts: action.payload,
          }
      }

      default:
          return state;
  }
}
