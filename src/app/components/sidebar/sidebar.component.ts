import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { RestaurantCard } from 'src/app/models';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() restaurantList: RestaurantCard[] = [];
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();

  handleSearch(searchText: string) {
    this.onSearch.emit(searchText);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
