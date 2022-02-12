import { CardComment } from './comment.model';

export interface RestaurantCard {
    name: string;
    address: string;
    rank: number;
    location: { lat: number, lng: number };
    googlePlaceId: string;
    comments: CardComment[];
}