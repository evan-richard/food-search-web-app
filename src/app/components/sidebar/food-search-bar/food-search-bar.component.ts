import { TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { toLowercaseNoDashes, toLowercaseWithDashes } from 'src/app/helpers';
import { APIService, FoodItem } from 'src/app/services';

@Component({
  selector: 'app-food-search-bar',
  templateUrl: './food-search-bar.component.html',
  styleUrls: ['./food-search-bar.component.scss'],
  providers: [TitleCasePipe]
})
export class FoodSearchBarComponent implements OnInit {

  @Output() onSearch: EventEmitter<FoodItem> = new EventEmitter<FoodItem>();

  searchText: string = '';
  isLoading: boolean = false;
  foodItemsList: FoodItem[] = [];
  foodItemNamesList: string[] = [];

  handleSearch() {
    this.isLoading = true;
    setTimeout(() => {
      this.onSearch.emit(
        this.foodItemsList.find(foodItem =>
          foodItem.name.includes(toLowercaseWithDashes(this.searchText))
        )
      );
      this.isLoading = false;
    }, 1000);
  }

  handleAutocomplete() {
    this.foodItemNamesList = this.foodItemsList.filter(foodItem =>
      foodItem.name.includes(toLowercaseWithDashes(this.searchText))
    ).map(foodItem => toLowercaseNoDashes(foodItem.name));
  }

  constructor(public titleCase: TitleCasePipe, private api: APIService) { }

  ngOnInit(): void {
    this.api.ListFoodItems().then((event) => {
      this.foodItemsList = event.items as FoodItem[];
    });
  }

}
