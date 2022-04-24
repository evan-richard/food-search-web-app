import { createSelector } from "@ngrx/store";
import { RestaurantState } from './restaurant.reducers';

const selectRestaurantState = (state: any) => state.restaurant;

export const getRestaurantLoadingState = createSelector(
  selectRestaurantState,
  (state: RestaurantState) => (state ? state.isLoadingRestaurant : null)
);

export const getSearchedRestaurantState = createSelector(
  selectRestaurantState,
  (state: RestaurantState) => (state ? state.searchedRestaurant : null)
);

export const getLatestCreatedRestaurantIdState = createSelector(
  selectRestaurantState,
  (state: RestaurantState) => (state ? state.latestCreateRestaurantId : null)
);
