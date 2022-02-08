import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit, AfterViewInit {

  @ViewChild('op') overlayPanel!: OverlayPanel;
  @Input() mapComponent?: MapComponent;
  items: any[];

  constructor() {
    this.items = [1,2,3];
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.overlayPanel.show(null, this.mapComponent);
  }

}
