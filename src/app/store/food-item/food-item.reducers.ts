import { createReducer, on, Action } from "@ngrx/store";
import { FoodItem } from 'src/app/services';
import {
  getFoodItemAction,
  getFoodItemSuccessAction,
  getFoodItemFailureAction,
  getAllFoodItemsAction,
  getAllFoodItemsSuccessAction,
  getAllFoodItemsFailureAction,
  createFoodItemAction,
  createFoodItemSuccessAction,
  createFoodItemFailureAction,
} from "./food-item.actions";

export const foodItemStateKey = "foodItem";

export interface FoodItemState {
  searchedFoodItem?: FoodItem;
  allFoodItems: FoodItem[];
  isLoadingFoodItem: boolean;
  latestCreateFoodItemId?: string;
}

const inititalState: FoodItemState = {
  isLoadingFoodItem: false,
  allFoodItems: []
};

const reducers = createReducer(
  inititalState,
  on(getFoodItemAction, (state: FoodItemState) => {
    return {
      ...state,
      isLoadingFoodItem: true
    };
  }),
  on(getFoodItemSuccessAction, (state: FoodItemState, { foodItem }) => {
    return {
      ...state,
      searchedFoodItem: foodItem,
      isLoadingFoodItem: false
    };
  }),
  on(getFoodItemFailureAction, (state: FoodItemState, { error }) => {
    return {
      ...state,
      isLoadingFoodItem: false
    };
  }),
  on(getAllFoodItemsAction, (state: FoodItemState) => {
    return {
      ...state,
      isLoadingFoodItem: true
    };
  }),
  on(getAllFoodItemsSuccessAction, (state: FoodItemState, { foodItems }) => {
    return {
      ...state,
      allFoodItems: foodItems,
      isLoadingFoodItem: false
    };
  }),
  on(getAllFoodItemsFailureAction, (state: FoodItemState, { error }) => {
    return {
      ...state,
      isLoadingFoodItem: false
    };
  }),
  on(createFoodItemAction, (state: FoodItemState) => state),
  on(createFoodItemSuccessAction, (state: FoodItemState, { foodItemId }) => {
    return {
      ...state,
      latestCreateFoodItemId: foodItemId
    }
  }),
  on(createFoodItemFailureAction, (state: FoodItemState, { error }) => state)
);

export function foodItemReducer(state: FoodItemState | undefined, action: Action) {
  return reducers(state, action);
}
