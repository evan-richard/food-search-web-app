import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-search-bar',
  templateUrl: './food-search-bar.component.html',
  styleUrls: ['./food-search-bar.component.scss']
})
export class FoodSearchBarComponent implements OnInit {
  @Input() searchText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
