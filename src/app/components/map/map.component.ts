import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { MapService, Restaurant } from 'src/app/services';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnChanges {

  @Input() restaurantList: Restaurant[] = [];

  options: any = {
    center: { lat: 40.766581, lng: -73.976647 },
    zoom: 14
  };
  overlays: any[] = [];
  infoWindow: any;

  handleOverlayClick(event: any) {
    let isMarker = event.overlay.getTitle != undefined;

    if (isMarker) {
        let title = event.overlay.getTitle();
        this.infoWindow.setContent(`${title}`);
        this.infoWindow.open(event.map, event.overlay);
        event.map.setCenter(event.overlay.getPosition());
    }
}


  constructor(public mapService: MapService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.restaurantList && this.restaurantList.length > 0) {
      this.options = {
        center: { lat: this.restaurantList[0].lat, lng: this.restaurantList[0].lng },
        zoom: 14
      };
      if (!this.infoWindow) {
        this.infoWindow = new google.maps.InfoWindow();
      }
      this.overlays = [];
      this.restaurantList.forEach(restaurant => {
        const marker = new google.maps.Marker({
          position: { lat: restaurant.lat, lng: restaurant.lng },
          title: `<b>${restaurant.name}</b><br></br>${restaurant.address}`
        });
        this.overlays.push(marker);
      });
    }
  }

}
