import { Component, Input, OnInit } from '@angular/core';
import { RestaurantCard } from 'src/app/models';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {

  @Input() restaurantList: RestaurantCard[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
