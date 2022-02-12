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
  // initMap(): void {
  //   // HOW TO: Search for a location
  //   var request = {
  //     query: 'The Rub Alexandria',
  //     fields: ['name', 'geometry'],
  //   };
  
  //   var service = new google.maps.places.PlacesService(map);
  
  //   service.findPlaceFromQuery(request, function(results, status) {
  //     if (results && status === google.maps.places.PlacesServiceStatus.OK) {
  //       for (var i = 0; i < results.length; i++) {
  //         // The marker, positioned at result
  //         const marker = new google.maps.Marker({
  //           position: results[i].geometry?.location,
  //           map: map,
  //         });
  //       }
  //     }
  //   });

  //   var request = {
  //     query: 'Rustico Alexandria',
  //     fields: ['name', 'geometry'],
  //   };
  
  //   var service = new google.maps.places.PlacesService(map);
  
  //   service.findPlaceFromQuery(request, function(results, status) {
  //     if (results && status === google.maps.places.PlacesServiceStatus.OK) {
  //       for (var i = 0; i < results.length; i++) {
  //         // The marker, positioned at result
  //         const marker = new google.maps.Marker({
  //           position: results[i].geometry?.location,
  //           map: map,
  //         });
  //       }
  //       if (results[0]) {
  //         map.setCenter(results[0].geometry?.location!);
  //       }
  //     }
  //   });
  // }

  constructor() {
  }
}