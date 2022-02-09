import { RestaurantCard } from '../models';

const mockRestaurantDB: { [name: string]: RestaurantCard[] } = {
    "fried_chicken_sandwich": [
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
          name: 'Chik-fil-a',
          topComment: 'Make sure to ask for cole slaw on top!',
          address: '1234 Street Rd Citopolis, IP 12345',
          rating: 0
        },
        {
          name: 'BonChon',
          topComment: 'Make sure to ask for cole slaw on top!',
          address: '1234 Street Rd Citopolis, IP 12345',
          rating: 0
        }
    ],
    "taco": [
        {
            name: 'District Taco',
            topComment: 'Make sure to ask for cole slaw on top!',
            address: '1234 Street Rd Citopolis, IP 12345',
            rating: -10
          },
          {
            name: 'Taco Bell',
            topComment: 'Good but has a kick.',
            address: '1234 Street Rd Citopolis, IP 12345',
            rating: 5
          },
          {
            name: 'Taco & Tequila',
            topComment: 'Make sure to ask for cole slaw on top!',
            address: '1234 Street Rd Citopolis, IP 12345',
            rating: 19
          }
    ]
}

// range: distance from specified location, in miles
export function getRestaurants(searchText: string, range: number): RestaurantCard[] {
    let formattedSearchText = searchText.trim().replace(new RegExp(' ', 'g'), '_').toLowerCase();
    console.log(`Returning ${formattedSearchText}`);
    return mockRestaurantDB[formattedSearchText];
  }