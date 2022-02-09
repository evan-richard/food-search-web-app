import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-list-item',
  templateUrl: './restaurant-list-item.component.html',
  styleUrls: ['./restaurant-list-item.component.scss']
})
export class RestaurantListItemComponent implements OnInit {

  @Input() name: string = '';
  @Input() topComment?: string;
  @Input() address: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
