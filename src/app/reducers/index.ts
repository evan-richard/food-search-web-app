import { ActionReducerMap } from "@ngrx/store";
import { foodItemReducer, FoodItemState, foodItemStateKey, recommendationReducer, RecommendationState, recommendationStateKey, restaurantReducer, RestaurantState, restaurantStateKey } from '../store';

export interface State {
  [foodItemStateKey]: FoodItemState;
  [restaurantStateKey]: RestaurantState;
  [recommendationStateKey]: RecommendationState
}

export const reducers: ActionReducerMap<State> = {
  [foodItemStateKey]: foodItemReducer,
  [restaurantStateKey]: restaurantReducer,
  [recommendationStateKey]: recommendationReducer
};
