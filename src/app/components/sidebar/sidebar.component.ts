import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { FoodItem, MapService, Restaurant } from 'src/app/services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() restaurantList: Restaurant[] = [];
  @Output() onSearch: EventEmitter<FoodItem> = new EventEmitter<FoodItem>();
  @Output() onShowRecommendationPanel = new EventEmitter();
  @Output() onShowLocationPanel = new EventEmitter();

  handleSearch(foodItem: FoodItem) {
    this.onSearch.emit(foodItem);
  }

  handleShowRecommendationPanel() {
    this.onShowRecommendationPanel.emit();
  }

  handleLocationTouch() {
    this.onShowLocationPanel.emit();
  }

  constructor(public mapService: MapService) {
  }

  ngOnInit(): void {
  }

}
