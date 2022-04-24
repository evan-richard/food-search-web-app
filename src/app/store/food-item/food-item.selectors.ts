import { FoodItemState } from "./food-item.reducers";
import { createSelector } from "@ngrx/store";

const selectFoodItemState = (state: any) => state.foodItem;

export const getFoodItemLoadingState = createSelector(
  selectFoodItemState,
  (state: FoodItemState) => (state ? state.isLoadingFoodItem : null)
);

export const getSearchedFoodItemState = createSelector(
  selectFoodItemState,
  (state: FoodItemState) => (state ? state.searchedFoodItem : null)
);

export const getAllFoodItemsState = createSelector(
  selectFoodItemState,
  (state: FoodItemState) => (state ? state.allFoodItems : [])
);

export const getLatestCreatedFoodItemIdState = createSelector(
  selectFoodItemState,
  (state: FoodItemState) => (state ? state.latestCreateFoodItemId : null)
);
