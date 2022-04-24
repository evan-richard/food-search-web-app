import { createAction, props } from "@ngrx/store";
import { CreateRestaurantInput, Restaurant } from 'src/app/services';

export const restaurantActionTypes = {
  GET_RESTAURANT_BY_PLACE_ID: "[Restaurant] Get Restaurant By Place Id",
  GET_RESTAURANT_BY_PLACE_ID_SUCCESS: "[Restaurant] Get Restaurant By Place Id Success",
  GET_RESTAURANT_BY_PLACE_ID_FAILURE: "[Restaurant] Get Restaurant By Place Id Failure",
  CREATE_RESTAURANT: "[Restaurant] Create Restaurant",
  CREATE_RESTAURANT_SUCCESS: "[Restaurant] Create Restaurant Success",
  CREATE_RESTAURANT_FAILURE: "[Restaurant] Create Restaurant Failure"
};

export const getRestaurantByPlaceIdAction = createAction(
  restaurantActionTypes.GET_RESTAURANT_BY_PLACE_ID,
  props<{ placeId: string }>()
);

export const getRestaurantByPlaceIdSuccessAction = createAction(
  restaurantActionTypes.GET_RESTAURANT_BY_PLACE_ID_SUCCESS,
  props<{ restaurant: Restaurant | null }>()
);

export const getRestaurantByPlaceIdFailureAction = createAction(
  restaurantActionTypes.GET_RESTAURANT_BY_PLACE_ID_FAILURE,
  props<{ error: any }>()
);

export const createRestaurantAction = createAction(
  restaurantActionTypes.CREATE_RESTAURANT,
  props<{ restaurant: CreateRestaurantInput }>()
);

export const createRestaurantSuccessAction = createAction(
  restaurantActionTypes.CREATE_RESTAURANT_SUCCESS,
  props<{ restaurantId: string }>()
);

export const createRestaurantFailureAction = createAction(
  restaurantActionTypes.CREATE_RESTAURANT_FAILURE,
  props<{ error: any }>()
);
