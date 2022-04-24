import { Injectable } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

import { Observable, Subject } from 'rxjs';

const loader = new Loader({
  apiKey: "",
  version: "weekly",
  libraries: ["places"]
});

@Injectable({
  providedIn: 'root'
})
export class MapService {

  currentLat: number = 0.0;
  currentLng: number = 0.0;
  currentCity: string = '';

  private placesService?: google.maps.places.PlacesService;
  private autocompleteService?: google.maps.places.AutocompleteService;
  private geocoderService?: google.maps.Geocoder;

  isMapServiceReady(): Observable<boolean> {
    let isServiceReady = new Subject<boolean>();

    loader.load().then(() =>
      isServiceReady.next(true)
    );

    return isServiceReady.asObservable();
  }

  // TODO: Basically, we want to save a "place" (placeId) when a user specifies they have a good food item.
  // Then, when another user is looking for that food item, we can return the list of sorted
  // places and set markers for the top 5 closest ones.
  getPlacesFromQuery(searchText: string): Observable<google.maps.places.AutocompletePrediction[]> {
    let results = new Subject<google.maps.places.AutocompletePrediction[]>();

    if (!this.autocompleteService) {
      this.autocompleteService = new google.maps.places.AutocompleteService();
    }

    this.autocompleteService.getPlacePredictions({ input: searchText }, (
      predictions: google.maps.places.AutocompletePrediction[] | null,
      status: google.maps.places.PlacesServiceStatus
    ) => {
      if (status != google.maps.places.PlacesServiceStatus.OK || !predictions) {
        alert(status);
        return;
      }
  
      results.next(predictions);
    });

    return results.asObservable();
  }

  getRestaurantsFromQuery(searchText: string): Observable<google.maps.places.PlaceResult[]> {
    let restaurants = new Subject<google.maps.places.PlaceResult[]>();

    if (!this.placesService) {
      const tempMap = new google.maps.Map(document.getElementById("temp-map") as HTMLElement);
      this.placesService = new google.maps.places.PlacesService(tempMap);
    }

    const request = {
      query: searchText,
      fields: ['place_id', 'name', 'geometry', 'formatted_address'],
    };

    this.placesService.findPlaceFromQuery(request, function(placeResults, status) {
      if (placeResults && status === google.maps.places.PlacesServiceStatus.OK) {
        restaurants.next(placeResults);
      }
    });

    return restaurants.asObservable();
  }

  getPlaceByPlaceId(googlePlaceId: any) {
    let place = new Subject<google.maps.GeocoderResult>();
    if (!this.geocoderService) {
      this.geocoderService = new google.maps.Geocoder();
    }

    this.geocoderService.geocode({ placeId: googlePlaceId }).then(({ results }) => {
      place.next(results[0]);
    });

    return place.asObservable();
  }

  constructor() {
  }
}
