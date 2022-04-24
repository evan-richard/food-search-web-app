import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap, catchError, take } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { from, of } from "rxjs";
import { APIService, CreateRestaurantInput, ModelRestaurantFilterInput, Restaurant } from 'src/app/services';
import { createRestaurantAction, createRestaurantFailureAction, createRestaurantSuccessAction, getRestaurantByPlaceIdAction, getRestaurantByPlaceIdFailureAction, getRestaurantByPlaceIdSuccessAction } from './restaurant.actions';
import { RestaurantState } from './restaurant.reducers';
import { getSearchedRestaurantState } from './restaurant.selectors';

@Injectable()
export class RestaurantEffects {
  constructor(
    private actions$: Actions,
    private store: Store<RestaurantState>,
    private apiService: APIService
  ) {}

  getRestaurantByPlaceId$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getRestaurantByPlaceIdAction),
        switchMap(payload => {
          const restaurantFilter: ModelRestaurantFilterInput = {
            googlePlaceId: {
              eq: payload.placeId
            }
          }
          return from(this.apiService.ListRestaurants(undefined, restaurantFilter)).pipe(
            map((restaurants) => 
              getRestaurantByPlaceIdSuccessAction({
                restaurant: restaurants.items ? (restaurants.items![0] as Restaurant) : null
              })
            ),
            catchError((error) => of(getRestaurantByPlaceIdFailureAction({ error: error })))
          )
        })
      ),
    { dispatch: true }
  );

  createRestaurant$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createRestaurantAction),
        switchMap((payload) => {
          // CREATE A NEW RESTAURANT
          return from(this.apiService.CreateRestaurant(payload.restaurant)).pipe(
            map((event) => {
              console.log("restaurant created!");
              // return createRestaurantSuccessAction({ restaurant: event });
              return createRestaurantSuccessAction({ restaurantId: event.id });
            }),
            catchError((error) => {
              console.log("error creating restaurant...", error);
              return of(createRestaurantFailureAction({ error: error }));
            })
          );
        })
      ),
    { dispatch: true }
  );
}
