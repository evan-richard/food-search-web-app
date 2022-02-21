import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/services';

import { takeWhile } from "rxjs/operators";

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {

  isLoading: boolean = true;

  constructor(private mapService: MapService) { }

  ngOnInit(): void {
    let currentLat = parseFloat(localStorage.getItem('currentLat') ?? '');
    let currentLng = parseFloat(localStorage.getItem('currentLng') ?? '');
    let currentCity = localStorage.getItem('currentCity');

    if (isNaN(currentLat) || isNaN(currentLng) || !currentCity) {
      currentLat = 40.766581;
      currentLng = -73.976647;
      currentCity = 'New York';
      localStorage.setItem('currentLat', (currentLat).toString());
      localStorage.setItem('currentLng', (currentLng).toString());
      localStorage.setItem('currentCity', currentCity);
    }

    this.mapService.currentLat = currentLat;
    this.mapService.currentLng = currentLng;
    this.mapService.currentCity = currentCity;

    this.mapService.isMapServiceReady()
      .pipe(takeWhile(() => this.isLoading))
      .subscribe(mapServiceReady => {
        this.isLoading = !mapServiceReady;
      });
  }

}
