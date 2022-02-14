import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { FoodItem, Restaurant } from 'src/app/services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() restaurantList: Restaurant[] = [];
  @Output() onSearch: EventEmitter<FoodItem> = new EventEmitter<FoodItem>();

  handleSearch(foodItem: FoodItem) {
    this.onSearch.emit(foodItem);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
