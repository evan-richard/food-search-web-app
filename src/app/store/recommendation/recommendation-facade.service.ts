import { Injectable } from "@angular/core";
import { combineLatest, Observable } from "rxjs";
import { select, Store } from "@ngrx/store";
import { RestaurantFacadeService } from '../restaurant';
import { FoodItemFacadeService } from '../food-item';
import { CreateFoodItemRecommendationInput, CreateRestaurantInput } from 'src/app/services';
import { createRecommendationAction } from './recommendation.actions';
import { getIsCreatingRecommendationState } from './recommendation.selectors';
import { RecommendationState } from './recommendation.reducers';
import { filter, takeWhile } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class RecommendationFacadeService {
  isCreatingRecommendation$: Observable<boolean | null>;

  constructor(
    private store: Store<RecommendationState>,
    private restaurantFacadeService: RestaurantFacadeService,
    private foodItemFacadeService: FoodItemFacadeService
  ) {
    this.isCreatingRecommendation$ = this.store.pipe(select(getIsCreatingRecommendationState));
  }

  createRecommendation(foodItemName: string, restaurant: CreateRestaurantInput) {
    let recommendationCreated: boolean = false;
    combineLatest([
      this.foodItemFacadeService.latestCreatedFoodItemId$,
      this.restaurantFacadeService.latestCreatedRestaurantId$
    ]).pipe(
      takeWhile(() => !recommendationCreated),
      filter(([foodItemId, restaurantId]) => typeof(foodItemId) === 'string' && typeof(restaurantId) === 'string')
    ).subscribe(([foodItemId, restaurantId]) => {
      const recommendation: CreateFoodItemRecommendationInput = {
        foodItemID: foodItemId!,
        restaurantID: restaurantId!
      };
      this.store.dispatch(createRecommendationAction({ recommendation: recommendation }));
      recommendationCreated = true;
    });

    this.foodItemFacadeService.createFoodItemIfNotExists(foodItemName);
    this.restaurantFacadeService.createRestaurantIfNotExists(restaurant);
  }
}
