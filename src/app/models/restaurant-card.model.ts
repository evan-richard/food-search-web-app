export interface RestaurantCard {
    name: string;
    address: string;
    rating: number;
    location: { lat: number, lng: number };
    googlePlaceId: string;
    topComment?: string;
}