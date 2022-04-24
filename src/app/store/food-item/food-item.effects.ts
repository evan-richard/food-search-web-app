import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap, catchError, withLatestFrom } from "rxjs/operators";
import {
  createFoodItemAction,
  createFoodItemFailureAction,
  createFoodItemSuccessAction,
  getAllFoodItemsAction,
  getAllFoodItemsFailureAction,
  getAllFoodItemsSuccessAction,
  getFoodItemAction, getFoodItemFailureAction, getFoodItemSuccessAction
} from "./food-item.actions";
import { Store } from "@ngrx/store";
import { FoodItemState } from "./food-item.reducers";
import { from, of } from "rxjs";
import { APIService, CreateFoodItemInput, FoodItem } from 'src/app/services';
import { toLowercaseWithDashes } from 'src/app/helpers';
import { getAllFoodItemsState } from './food-item.selectors';

@Injectable()
export class FoodItemEffects {
  constructor(
    private actions$: Actions,
    private store: Store<FoodItemState>,
    private apiService: APIService
  ) {}

  getFoodItem$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getFoodItemAction),
        switchMap(payload =>
          from(this.apiService.GetFoodItem(payload.id)).pipe(
            map((foodItem) => 
              getFoodItemSuccessAction({ foodItem: (foodItem as FoodItem)})
            ),
            catchError((error) => of(getFoodItemFailureAction({ error: error })))
          )
        )
      ),
    { dispatch: true }
  );

  getAllFoodItems$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getAllFoodItemsAction),
        switchMap(payload =>
          from(this.apiService.ListFoodItems()).pipe(
            map((foodItems) => 
              getAllFoodItemsSuccessAction({
                foodItems: foodItems.items ? (foodItems.items as FoodItem[]) : []
              })
            ),
            catchError((error) => of(getAllFoodItemsFailureAction({ error: error })))
          )
        )
      ),
    { dispatch: true }
  );

  createFoodItemIfNotExists$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createFoodItemAction),
        switchMap(payload => {
          const foodItem: CreateFoodItemInput = {
            name: toLowercaseWithDashes(payload.name)
          };
          return from(this.apiService.CreateFoodItem(foodItem)).pipe(
            map((event) => {
              this.store.dispatch(getAllFoodItemsAction());
              return createFoodItemSuccessAction({ foodItemId: event.id });
            }),
            catchError((error) => of(createFoodItemFailureAction({ error: error })))
          );
        })
      ),
    { dispatch: true }
  );
}
