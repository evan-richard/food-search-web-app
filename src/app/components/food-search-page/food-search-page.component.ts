import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { RecommendationOverlayComponent } from '../recommendation-overlay/recommendation-overlay.component';

import {APIService, Comment, FoodItem, ModelCommentFilterInput, Restaurant} from "src/app/services";

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
    this.api.GetFoodItem(foodItem.id).then((event) => {
      console.log(`Food item:`);
      console.log((event as FoodItem));
      console.log("Recommended restaurants:");
      console.log((event as FoodItem).recommendedRestaurants?.items);
      this.restaurantList = (event as FoodItem).recommendedRestaurants!.items!.map(result => {
        return {
          address: result!.restaurant.address,
          googlePlaceId: result!.restaurant.googlePlaceId,
          id: result!.restaurant.id,
          lat: result!.restaurant.lat,
          lng: result!.restaurant.lng,
          name: result!.restaurant.name,
          rank: result!.restaurant.rank
        } as Restaurant;
      });
    });
  }

  showRecommendationOverlay() {
    const ref = this.dialogService.open(RecommendationOverlayComponent, {
        header: 'Make a Recommendation',
        width: '70%'
    });
  }

  constructor(private dialogService: DialogService, private api: APIService) { }

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
