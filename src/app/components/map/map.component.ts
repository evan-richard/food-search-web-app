import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { Loader } from "@googlemaps/js-api-loader";
import { RestaurantCard } from 'src/app/models';

const loader = new Loader({
  apiKey: "AIzaSyAJRWH0eRAUckakb3jOgDyIRhzI3-zDuwE",
  version: "weekly",
  libraries: ["places"]
});

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnChanges {

  @Input() restaurantList: RestaurantCard[] = [];

  options: any = {
    center: { lat: 40.766581, lng: -73.976647 },
    zoom: 12
  };
  overlays: any[] = [];

  // TODO: Basically, we want to save a "place" (placeId) when a user specifies they have a good food item.
  // Then, when another user is looking for that food item, we can return the list of sorted
  // places and set markers for the top 5 closest ones.
  initMap(): void {
    // HOW TO: Search for a location
    // var request = {
    //   query: 'The Rub Alexandria',
    //   fields: ['name', 'geometry'],
    // };
  
    // var service = new google.maps.places.PlacesService(map);
  
    // service.findPlaceFromQuery(request, function(results, status) {
    //   if (results && status === google.maps.places.PlacesServiceStatus.OK) {
    //     for (var i = 0; i < results.length; i++) {
    //       // The marker, positioned at result
    //       const marker = new google.maps.Marker({
    //         position: results[i].geometry?.location,
    //         map: map,
    //       });
    //     }
    //   }
    // });

    // var request = {
    //   query: 'Rustico Alexandria',
    //   fields: ['name', 'geometry'],
    // };
  
    // var service = new google.maps.places.PlacesService(map);
  
    // service.findPlaceFromQuery(request, function(results, status) {
    //   if (results && status === google.maps.places.PlacesServiceStatus.OK) {
    //     for (var i = 0; i < results.length; i++) {
    //       // The marker, positioned at result
    //       const marker = new google.maps.Marker({
    //         position: results[i].geometry?.location,
    //         map: map,
    //       });
    //     }
    //     if (results[0]) {
    //       map.setCenter(results[0].geometry?.location!);
    //     }
    //   }
    // });
  }

  constructor() {}

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.restaurantList && this.restaurantList.length > 0) {
      this.options = {
        center: this.restaurantList[0].location,
        zoom: 12
      };

      loader.load().then(() => {
        this.overlays = [];
        this.restaurantList.forEach(restaurant => {
          const marker = new google.maps.Marker({
            position: restaurant.location,
            title: restaurant.name
          });
          this.overlays.push(marker);
        });
      });
    }
  }

}
