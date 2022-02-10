import { Component, OnInit } from '@angular/core';
import { getRestaurants } from 'src/app/mocks/mock-restaurant-service.mock';
import { RestaurantCard } from 'src/app/models';

@Component({
  selector: 'app-food-search-page',
  templateUrl: './food-search-page.component.html',
  styleUrls: ['./food-search-page.component.scss']
})
export class FoodSearchPageComponent implements OnInit {

  restaurantList: RestaurantCard[] = [];

  handleSearch(searchText: string) {
    console.log(`Searching for ${searchText}`);
    this.restaurantList = getRestaurants(searchText, 20);
  }

  constructor() { }

  ngOnInit(): void {
  }



}
