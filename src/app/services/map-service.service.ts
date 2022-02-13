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
  getRestaurantsFromQuery(searchText: string): Observable<google.maps.places.PlaceResult[]> {
    let results = new Subject<google.maps.places.PlaceResult[]>();
    var request = {
      query: searchText,
      fields: ['name', 'geometry'],
    };

    let searchResults: google.maps.places.PlaceResult[] = [];
  
    const tempMap = new google.maps.Map(document.getElementById("temp-map") as HTMLElement);
    var service = new google.maps.places.PlacesService(tempMap);
    service.findPlaceFromQuery(request, function(placeResults, status) {
      if (placeResults && status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < placeResults.length; i++) {
          searchResults.push(placeResults[i]);
        }
        results.next(searchResults);
      }
    });

    return results.asObservable();
  }

  constructor() {
  }
}
