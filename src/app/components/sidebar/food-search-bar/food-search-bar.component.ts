import { TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-food-search-bar',
  templateUrl: './food-search-bar.component.html',
  styleUrls: ['./food-search-bar.component.scss'],
  providers: [TitleCasePipe]
})
export class FoodSearchBarComponent implements OnInit {

  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();

  searchText: string = 'fried chicken sandwich';
  isLoading: boolean = false;

  handleSearch() {
    this.isLoading = true;
    setTimeout(() => {
      this.onSearch.emit(this.searchText);
      this.isLoading = false;
    }, 1000);
  }

  constructor(public titleCase: TitleCasePipe) { }

  ngOnInit(): void {
    this.handleSearch();
  }

}
