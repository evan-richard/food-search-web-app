import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { getRestaurants } from 'src/app/mocks/mock-restaurant-service.mock';
import { RestaurantCard } from 'src/app/models';
import { RecommendationOverlayComponent } from '../recommendation-overlay/recommendation-overlay.component';

@Component({
  selector: 'app-food-search-page',
  templateUrl: './food-search-page.component.html',
  styleUrls: ['./food-search-page.component.scss'],
  providers: [DialogService]
})
export class FoodSearchPageComponent implements OnInit {

  restaurantList: RestaurantCard[] = [];

  handleSearch(searchText: string) {
    console.log(`Searching for ${searchText}`);
    this.restaurantList = getRestaurants(searchText, 20);
  }

  showRecommendationOverlay() {
    const ref = this.dialogService.open(RecommendationOverlayComponent, {
        header: 'Make a Recommendation',
        width: '70%'
    });
  }

  constructor(public dialogService: DialogService) { }

  ngOnInit(): void {
  }



}
