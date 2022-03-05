import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { MapService } from 'src/app/services';

@Component({
  selector: 'app-location-overlay',
  templateUrl: './location-overlay.component.html',
  styleUrls: ['./location-overlay.component.scss']
})
export class LocationOverlayComponent implements OnInit, OnDestroy {

  isComponentAlive: boolean = false;
  selectedLocationStr: string = '';
  selectedLocation?: google.maps.places.PlaceResult;
  locationSearchResults: google.maps.places.PlaceResult[] = [];

  handleLocationSearch(event: any) {
    this.mapService.getPlacesFromQuery(event.query)
      .pipe(takeWhile(() => this.isComponentAlive))
      .subscribe(results => {
        this.locationSearchResults = results;
      });
  }

  handleLocationSelect(event: google.maps.places.PlaceResult) {
    this.selectedLocationStr = `${event.formatted_address}`;
    this.selectedLocation = event;
  }

  handleSave() {
    localStorage.setItem('currentLat', this.selectedLocation?.geometry?.location?.lat().toString() ?? '');
    localStorage.setItem('currentLng', this.selectedLocation?.geometry?.location?.lng().toString() ?? '');
    localStorage.setItem('currentCity', this.selectedLocation?.formatted_address ?? '');
  }

  constructor(private mapService: MapService) { }

  ngOnInit(): void {
    this.isComponentAlive = true;
  }

  ngOnDestroy(): void {
    this.isComponentAlive = false;
  }

}
