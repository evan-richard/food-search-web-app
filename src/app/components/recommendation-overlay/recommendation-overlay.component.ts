import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { MapService } from 'src/app/services';

@Component({
  selector: 'app-recommendation-overlay',
  templateUrl: './recommendation-overlay.component.html',
  styleUrls: ['./recommendation-overlay.component.scss']
})
export class RecommendationOverlayComponent implements OnInit, OnDestroy {

  isComponentAlive: boolean = false;
  foodSearchText: string = 'Pizza';
  restaurantSearchText: string = '';
  restaurantSearchResults: string[] = [];

  handleRestaurantSearch(event: any) {
    this.mapService.getRestaurantsFromQuery(event.query)
      .pipe(takeWhile(() => this.isComponentAlive))
      .subscribe(results => {
        this.restaurantSearchResults = results.map((placeResult: google.maps.places.PlaceResult) =>
          placeResult.name ?? ''
        );
      });
  }

  handleSkip() {
  }

  handleSave() {
  }

  constructor(private mapService: MapService) { }

  ngOnInit(): void {
    this.isComponentAlive = true;
  }

  ngOnDestroy(): void {
    this.isComponentAlive = false;
  }
}
