import { RestaurantCard } from '../models';

const mockRestaurantDB: { [name: string]: RestaurantCard[] } = {
    "fried_chicken_sandwich": [
        {
          name: 'Rustico',
          comments: [
            {
              text: 'Make sure to ask for cole slaw on top!',
              likes: 5
            },
            {
              text: 'Test',
              likes: 2
            }
          ],
          address: '1234 Street Rd Citopolis, IP 12345',
          rank: 8,
          location: {
            lat: 38.82147,
            lng: -77.04722
          },
          googlePlaceId: ''
        },
        {
          name: 'The Rub',
          comments: [
            {
              text: 'Good but has a kick.',
              likes: 0
            }
          ],
          address: '1234 Street Rd Citopolis, IP 12345',
          rank: -5,
          location: {
            lat: 38.805262,
            lng: -77.048180
          },
          googlePlaceId: ''
        },
        {
          name: 'PoiBoi',
          address: '1234 Street Rd Citopolis, IP 12345',
          rank: 36,
          comments: [],
          location: {
            lat: 38.813960,
            lng: -77.041931
          },
          googlePlaceId: ''
        },
        {
          name: 'Chik-fil-a',
          comments: [
            {
              text: 'Super long comment super long comment  super long comment  super long comment  super long comment  super long comment  super long comment  super long comment  super long comment  super long comment  super long comment  super long comment  super long comment  super long comment  super long comment  super long comment  super long comment  super long comment  super long comment  super long comment ',
              likes: 0
            }
          ],
          address: '1234 Street Rd Citopolis, IP 12345',
          rank: 0,
          location: {
            lat: 38.854241,
            lng: -77.049490
          },
          googlePlaceId: ''
        },
        {
          name: 'BonChon',
          comments: [
            {
              text: 'Make sure to ask for cole slaw on top!',
              likes: 0
            }
          ],
          address: '1234 Street Rd Citopolis, IP 12345',
          rank: 0,
          location: {
            lat: 0,
            lng: 0
          },
          googlePlaceId: ''
        }
    ],
    "taco": [
        {
            name: 'District Taco',
            comments: [
              {
                text: 'Make sure to ask for cole slaw on top!',
                likes: 0
              }
            ],
            address: '1234 Street Rd Citopolis, IP 12345',
            rank: -10,
            location: {
              lat: 38.798166,
              lng: -77.048706
            },
            googlePlaceId: ''
          },
          {
            name: 'Taco Bell',
            comments: [
              {
                text: 'Make sure to ask for cole slaw on top!',
                likes: 0
              }
            ],
            address: '1234 Street Rd Citopolis, IP 12345',
            rank: 5,
            location: {
              lat: 38.804844,
              lng: -77.044185
            },
            googlePlaceId: ''
          },
          {
            name: 'Taco & Tequila',
            comments: [
              {
                text: 'Make sure to ask for cole slaw on top!',
                likes: 0
              }
            ],
            address: '1234 Street Rd Citopolis, IP 12345',
            rank: 19,
            location: {
              lat: 38.801686,
              lng: -77.061798
            },
            googlePlaceId: ''
          }
    ]
}

// range: distance from specified location, in miles
export function getRestaurants(searchText: string, range: number): RestaurantCard[] {
    let formattedSearchText = searchText.trim().replace(new RegExp(' ', 'g'), '_').toLowerCase();
    return mockRestaurantDB[formattedSearchText].sort((restaurant1, restaurant2) =>
      restaurant1.rank < restaurant2.rank ? 1 : -1
    );
  }