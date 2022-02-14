import { Component, Input, OnInit } from '@angular/core';
import { Comment, Restaurant } from 'src/app/services';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {

  @Input() restaurantList: Restaurant[] = [];

  getTopComment(comments: Comment[]): string {
    let topComment: string;
    if (comments.length > 0) {
      topComment = comments.sort((comment1, comment2) => comment1.likes < comment2.likes ? 1 : -1)[0].content;
    } else {
      topComment = '';
    }
    return topComment;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
