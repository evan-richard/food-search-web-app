import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { LocationOverlayComponent } from '../location-overlay/location-overlay.component';
import { RecommendationOverlayComponent } from '../recommendation-overlay/recommendation-overlay.component';

import { Comment, FoodItem, ModelCommentFilterInput, Restaurant} from "src/app/services";
import { FoodItemFacadeService } from 'src/app/store';
import { filter, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-food-search-page',
  templateUrl: './food-search-page.component.html',
  styleUrls: ['./food-search-page.component.scss'],
  providers: [DialogService]
})
export class FoodSearchPageComponent implements OnInit {

  restaurantList: Restaurant[] = [];

  handleSearch(foodItem: FoodItem) {
    console.log(`Searching for ${foodItem.name}`);
    let searching: boolean = true;
    this.foodItemService.searchedFoodItem$.pipe(
      takeWhile(() => searching),
      filter(searchResult => searchResult !== undefined && searchResult?.name === foodItem?.name)
    ).subscribe((searchResult) => {
      console.log(`Food item:`);
      console.log(searchResult);
      console.log("Recommended restaurants:");
      console.log(searchResult!.recommendedRestaurants!.items);
      this.restaurantList = searchResult!.recommendedRestaurants!.items!.map(recommendation =>
        recommendation!.restaurant as Restaurant
      );
      searching = false;
    });
    this.foodItemService.getFoodItem(foodItem.id);
  }

  showRecommendationOverlay() {
    const ref = this.dialogService.open(RecommendationOverlayComponent, {
        header: 'Make a Recommendation',
        width: '70%'
    });
  }

  showLocationOverlay() {
    const ref = this.dialogService.open(LocationOverlayComponent, {
        header: 'Change Location',
        width: '40%'
    });
  }

  constructor(private dialogService: DialogService, private foodItemService: FoodItemFacadeService) { }

  ngOnInit(): void {
    // const commentFilter: ModelCommentFilterInput = {
    //   foodItemID: "",
    //   restaurantID: ""
    // }
    // this.api.ListComments().then((event) => {
    //   console.log(`Comments: ${event.items as Comment[]}`);
    // });
  }
}
