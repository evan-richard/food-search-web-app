import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { CreateRestaurantInput, FoodItem, MapService, Restaurant } from 'src/app/services';
import { RecommendationFacadeService } from 'src/app/store';

@Component({
  selector: 'app-recommendation-overlay',
  templateUrl: './recommendation-overlay.component.html',
  styleUrls: ['./recommendation-overlay.component.scss']
})
export class RecommendationOverlayComponent implements OnInit, OnDestroy {

  isComponentAlive: boolean = false;
  foodSearchText: string = 'Pizza';
  selectedRestaurant?: google.maps.places.PlaceResult;
  selectedRestaurantName: string = '';
  restaurantSearchResults: google.maps.places.PlaceResult[] = [];
  markedRestaurant?: google.maps.Marker;
  map?: google.maps.Map;

  setMap(event: any) {
    this.map = event.map;
  }

  handleRestaurantSearch(event: any) {
    this.mapService.getRestaurantsFromQuery(event.query)
      .pipe(takeWhile(() => this.isComponentAlive))
      .subscribe(results => {
        this.restaurantSearchResults = results;
      });
  }

  handleRestaurantSelect(event: google.maps.places.PlaceResult) {
    this.selectedRestaurant = event;
    this.selectedRestaurantName = event.name ?? '';
    this.markedRestaurant = new google.maps.Marker({
      position: {
        lat: event.geometry?.location?.lat() ?? 0,
        lng: event.geometry?.location?.lng() ?? 0
      },
      title: event.name
    });
    let bounds = new google.maps.LatLngBounds();
    bounds.extend(this.markedRestaurant.getPosition()!);
    this.map?.fitBounds(bounds);
    this.map?.setZoom(14);
  }

  handleSkip() {
  }

  handleSave() {
    // TODO: Fix this shiz, ids are only returned when the restaurant or food item is newly created. Otherwise the id will be wrong.
    const restaurant: CreateRestaurantInput = {
      name: this.selectedRestaurant?.name!,
      address: this.selectedRestaurant?.formatted_address!,
      rank: 0,
      lat: this.selectedRestaurant?.geometry?.location?.lat()!,
      lng: this.selectedRestaurant?.geometry?.location?.lng()!,
      googlePlaceId: this.selectedRestaurant?.place_id!
    };
    this.recommendationFacadeService.createRecommendation(
      this.foodSearchText,
      restaurant
    );
  }

  constructor(
    private mapService: MapService,
    private recommendationFacadeService: RecommendationFacadeService
  ) { }

  ngOnInit(): void {
    this.isComponentAlive = true;
  }

  ngOnDestroy(): void {
    this.isComponentAlive = false;
  }
}
