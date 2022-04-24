import { createReducer, on, Action } from "@ngrx/store";
import { Restaurant } from 'src/app/services';
import { createRestaurantAction, createRestaurantSuccessAction, getRestaurantByPlaceIdAction, getRestaurantByPlaceIdFailureAction, getRestaurantByPlaceIdSuccessAction } from './restaurant.actions';

export const restaurantStateKey = "restaurant";

export interface RestaurantState {
  searchedRestaurant?: Restaurant | null;
  isLoadingRestaurant: boolean;
  isCreatingRestaurant: boolean;
  latestCreateRestaurantId?: string;
}

const inititalState: RestaurantState = {
  isLoadingRestaurant: false,
  isCreatingRestaurant: false
};

const reducers = createReducer(
  inititalState,
  on(getRestaurantByPlaceIdAction, (state: RestaurantState) => {
    return {
      ...state,
      isLoadingRestaurant: true
    };
  }),
  on(getRestaurantByPlaceIdSuccessAction, (state: RestaurantState, { restaurant }) => {
    return {
      ...state,
      searchedRestaurant: restaurant,
      isLoadingRestaurant: false
    };
  }),
  on(getRestaurantByPlaceIdFailureAction, (state: RestaurantState, { error }) => {
    return {
      ...state,
      isLoadingRestaurant: false
    };
  }),
  on(createRestaurantAction, (state: RestaurantState) => {
    return {
      ...state,
      isCreatingRestaurant: true
    }
  }),
  on(createRestaurantSuccessAction, (state: RestaurantState, { restaurantId }) => {
    return {
      ...state,
      isCreatingRestaurant: false,
      latestCreateRestaurantId: restaurantId
    }
  }),
  on(createRestaurantSuccessAction, (state: RestaurantState) => {
    return {
      ...state,
      isCreatingRestaurant: false
    }
  })
);

export function restaurantReducer(state: RestaurantState | undefined, action: Action) {
  return reducers(state, action);
}
