import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-food-search-bar',
  templateUrl: './food-search-bar.component.html',
  styleUrls: ['./food-search-bar.component.scss']
})
export class FoodSearchBarComponent implements OnInit {

  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();

  searchText: string = 'fried chicken sandwich';

  handleSearch() {
    console.log(`Sending ${this.searchText}`);
    this.onSearch.emit(this.searchText);
  }

  constructor() { }

  ngOnInit(): void {
    this.handleSearch();
  }

}
