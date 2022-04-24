import { createAction, props } from "@ngrx/store";
import { FoodItem } from 'src/app/services';

export const foodItemActionTypes = {
  GET_FOOD_ITEM: "[Food Item] Get Food Item",
  GET_FOOD_ITEM_SUCCESS: "[Food Item] Get Food Item Success",
  GET_FOOD_ITEM_FAILURE: "[Food Item] Get Food Item Failure",
  GET_ALL_FOOD_ITEMS: "[Food Item] Get All Food Items",
  GET_ALL_FOOD_ITEMS_SUCCESS: "[Food Item] Get All Food Items Success",
  GET_ALL_FOOD_ITEMS_FAILURE: "[Food Item] Get All Food Items Failure",
  CREATE_FOOD_ITEM: "[Food Item] Create Food Item",
  CREATE_FOOD_ITEM_SUCCESS: "[Food Item] Create Food Item Success",
  CREATE_FOOD_ITEM_FAILURE: "[Food Item] Create Food Item Failure",
};

export const getFoodItemAction = createAction(
  foodItemActionTypes.GET_FOOD_ITEM,
  props<{ id: string }>()
);

export const getFoodItemSuccessAction = createAction(
  foodItemActionTypes.GET_FOOD_ITEM_SUCCESS,
  props<{ foodItem: FoodItem }>()
);

export const getFoodItemFailureAction = createAction(
  foodItemActionTypes.GET_FOOD_ITEM_FAILURE,
  props<{ error: any }>()
);

export const getAllFoodItemsAction = createAction(foodItemActionTypes.GET_ALL_FOOD_ITEMS);

export const getAllFoodItemsSuccessAction = createAction(
  foodItemActionTypes.GET_ALL_FOOD_ITEMS_SUCCESS,
  props<{ foodItems: FoodItem[] }>()
);

export const getAllFoodItemsFailureAction = createAction(
  foodItemActionTypes.GET_ALL_FOOD_ITEMS_FAILURE,
  props<{ error: any }>()
);

export const createFoodItemAction = createAction(
  foodItemActionTypes.CREATE_FOOD_ITEM,
  props<{ name: string }>()
);

export const createFoodItemSuccessAction = createAction(
  foodItemActionTypes.CREATE_FOOD_ITEM_SUCCESS,
  props<{ foodItemId: string }>()
);

export const createFoodItemFailureAction = createAction(
  foodItemActionTypes.CREATE_FOOD_ITEM_FAILURE,
  props<{ error: any }>()
);
