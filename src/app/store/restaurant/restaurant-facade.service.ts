import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { select, Store } from "@ngrx/store";
import { CreateRestaurantInput, Restaurant } from 'src/app/services';
import { RestaurantState } from './restaurant.reducers';
import { getLatestCreatedRestaurantIdState, getRestaurantLoadingState, getSearchedRestaurantState } from './restaurant.selectors';
import { createRestaurantAction, getRestaurantByPlaceIdAction } from './restaurant.actions';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class RestaurantFacadeService {
  searchedRestaurant$: Observable<Restaurant | null | undefined>;
  isLoadingRestaurant$: Observable<boolean | null>;
  latestCreatedRestaurantId$: Observable<string | null | undefined>;

  constructor(private store: Store<RestaurantState>) {
    this.searchedRestaurant$ = this.store.pipe(select(getSearchedRestaurantState));
    this.isLoadingRestaurant$ = this.store.pipe(select(getRestaurantLoadingState));
    this.latestCreatedRestaurantId$ = this.store.pipe(select(getLatestCreatedRestaurantIdState));
  }

  getRestaurantByPlaceId(placeId: string) {
    this.store.dispatch(getRestaurantByPlaceIdAction({placeId: placeId}));
  }

  createRestaurantIfNotExists(restaurant: CreateRestaurantInput) {
    this.searchedRestaurant$.pipe(take(1)).subscribe(searchedRestaurant => {
      if (!searchedRestaurant) {
        this.store.dispatch(createRestaurantAction({restaurant: restaurant}));
      }
    });
    this.getRestaurantByPlaceId(restaurant.googlePlaceId);
  }
}
