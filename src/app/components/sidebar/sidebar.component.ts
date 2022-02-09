import { Component, OnInit } from '@angular/core';
import { getRestaurants } from 'src/app/mocks/mock-restaurant-service.mock';
import { RestaurantCard } from 'src/app/models';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  searchResults: RestaurantCard[] = [];

  onFoodSearch(searchText: string) {
    console.log(`Searching for ${searchText}`);
    this.searchResults = getRestaurants(searchText, 20);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
