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
    this.mapService.isMapServiceReady()
      .pipe(takeWhile(() => this.isLoading))
      .subscribe(mapServiceReady => {
        this.isLoading = !mapServiceReady;
      });
  }

}
