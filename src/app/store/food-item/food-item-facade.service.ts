import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { select, Store } from "@ngrx/store";
import { createFoodItemAction, getAllFoodItemsAction, getFoodItemAction } from './food-item.actions';
import { FoodItem } from 'src/app/services';
import { FoodItemState } from './food-item.reducers';
import { getAllFoodItemsState, getFoodItemLoadingState, getLatestCreatedFoodItemIdState, getSearchedFoodItemState } from './food-item.selectors';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class FoodItemFacadeService {
  searchedFoodItem$: Observable<FoodItem | null | undefined>;
  allFoodItems$: Observable<FoodItem[]>;
  isLoadingFoodItem$: Observable<boolean | null>;
  latestCreatedFoodItemId$: Observable<string | null | undefined>;

  constructor(private store: Store<FoodItemState>) {
    this.searchedFoodItem$ = this.store.pipe(select(getSearchedFoodItemState));
    this.allFoodItems$ = this.store.pipe(select(getAllFoodItemsState));
    this.isLoadingFoodItem$ = this.store.pipe(select(getFoodItemLoadingState));
    this.latestCreatedFoodItemId$ = this.store.pipe(select(getLatestCreatedFoodItemIdState));
  }

  getFoodItem(id: string) {
    this.store.dispatch(getFoodItemAction({id: id}));
  }

  getAllFoodItems() {
    this.store.dispatch(getAllFoodItemsAction());
  }

  createFoodItemIfNotExists(name: string) {
    this.allFoodItems$.pipe(take(1)).subscribe(allFoodItems => {
      let foodItemObject = allFoodItems.find(foodItem => foodItem.name === name);
      if (!foodItemObject) {
        this.store.dispatch(createFoodItemAction({name: name}));
      }
    });
  }
}
