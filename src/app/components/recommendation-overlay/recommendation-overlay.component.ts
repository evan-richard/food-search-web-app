import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { APIService, CreateFoodItemInput, CreateFoodItemRecommendationInput, CreateRestaurantInput, MapService, Restaurant } from 'src/app/services';

@Component({
  selector: 'app-recommendation-overlay',
  templateUrl: './recommendation-overlay.component.html',
  styleUrls: ['./recommendation-overlay.component.scss']
})
export class RecommendationOverlayComponent implements OnInit, OnDestroy {

  isComponentAlive: boolean = false;
  foodSearchText: string = 'Pizza';
  selectedRestaurant: string = '';
  restaurantSearchResults: google.maps.places.PlaceResult[] = [];

  handleRestaurantSearch(event: any) {
    this.mapService.getRestaurantsFromQuery(event.query)
      .pipe(takeWhile(() => this.isComponentAlive))
      .subscribe(results => {
        this.restaurantSearchResults = results;
      });
  }

  handleRestaurantSelect(event: any) {
    this.selectedRestaurant = event.name ?? '';
    // TODO - place marker on map and show place
  }

  handleSkip() {
  }

  handleSave() {
    // CREATE A NEW FOOD ITEM
    // const foodItem: CreateFoodItemInput = {
    //   name: 'fried-chicken-sandwich'
    // };
    // this.api
    //   .CreateFoodItem(foodItem)
    //   .then((event) => {
    //     console.log("food item created!");
    //   })
    //   .catch((e) => {
    //     console.log("error creating food item...", e);
    //   });

    // CREATE A NEW RESTAURANT
    // const restaurant: CreateRestaurantInput = {
    //   name: 'Noodle Box',
    //   address: '1234 Address St Analytica, VA',
    //   rank: 0,
    //   lat: 40.766581,
    //   lng: -73.976647,
    //   googlePlaceId: 'mock-place-id'
    // };
    // this.api
    //   .CreateRestaurant(restaurant)
    //   .then((event) => {
    //     console.log("restaurant created!");
    //   })
    //   .catch((e) => {
    //     console.log("error creating restaurant...", e);
    //   });

    // LINK RESTAURANT AND FOOD ITEM
    // const foodItemRecommendation: CreateFoodItemRecommendationInput = {
    //   foodItemID: "",
    //   restaurantID: ""
    // };
    // this.api
    //   .CreateFoodItemRecommendation(foodItemRecommendation)
    //   .then((event) => {
    //     console.log("recommendation mapping created!");
    //   })
    //   .catch((e) => {
    //     console.log("error creating recommendation mapping...", e);
    //   });
  }

  constructor(private mapService: MapService, private api: APIService) { }

  ngOnInit(): void {
    this.isComponentAlive = true;
  }

  ngOnDestroy(): void {
    this.isComponentAlive = false;
  }
}
