import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, take, takeWhile } from 'rxjs/operators';
import { MapService } from 'src/app/services';

@Component({
  selector: 'app-location-overlay',
  templateUrl: './location-overlay.component.html',
  styleUrls: ['./location-overlay.component.scss']
})
export class LocationOverlayComponent implements OnInit, OnDestroy {

  isComponentAlive: boolean = false;
  selectedLocationStr: string = '';
  selectedLocation?: google.maps.places.AutocompletePrediction;
  locationSearchResults: google.maps.places.AutocompletePrediction[] = [];

  handleLocationSearch(event: any) {
    this.mapService.getPlacesFromQuery(event.query)
      .pipe(takeWhile(() => this.isComponentAlive))
      .subscribe(results => {
        this.locationSearchResults = results;
      });
  }

  handleLocationSelect(event: google.maps.places.AutocompletePrediction) {
    this.selectedLocationStr = `${event.description}`;
    this.selectedLocation = event;
  }

  handleSave() {
    this.mapService.getPlaceByPlaceId(this.selectedLocation?.place_id).pipe(
      take(1)
    ).subscribe((place: google.maps.GeocoderResult) => {
      localStorage.setItem('currentLat', place.geometry?.location?.lat().toString() ?? '');
      localStorage.setItem('currentLng', place.geometry?.location?.lng().toString() ?? '');
      localStorage.setItem('currentCity', place.formatted_address ?? '');
    });
  }

  constructor(private mapService: MapService) { }

  ngOnInit(): void {
    this.isComponentAlive = true;
  }

  ngOnDestroy(): void {
    this.isComponentAlive = false;
  }

}
