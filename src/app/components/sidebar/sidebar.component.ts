import { Component, OnInit } from '@angular/core';
import { RestaurantCard } from 'src/app/models';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  searchText: string = '';
  searchResults: RestaurantCard[] = [];

  constructor() { }

  ngOnInit(): void {
    this.searchResults = [
      {
        name: 'Rustico',
        topComment: 'Make sure to ask for cole slaw on top!',
        address: '1234 Street Rd Citopolis, IP 12345',
        rating: 8
      },
      {
        name: 'The Rub',
        topComment: 'Good but has a kick.',
        address: '1234 Street Rd Citopolis, IP 12345',
        rating: -5
      },
      {
        name: 'PoiBoi',
        address: '1234 Street Rd Citopolis, IP 12345',
        rating: 36
      },
      {
        name: 'Rustico',
        topComment: 'Make sure to ask for cole slaw on top!',
        address: '1234 Street Rd Citopolis, IP 12345',
        rating: 0
      },
      {
        name: 'Rustico',
        topComment: 'Make sure to ask for cole slaw on top!',
        address: '1234 Street Rd Citopolis, IP 12345',
        rating: 0
      }
    ]
  }

}
