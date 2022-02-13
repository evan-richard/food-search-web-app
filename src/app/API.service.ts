/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateFoodItem: OnCreateFoodItemSubscription;
  onUpdateFoodItem: OnUpdateFoodItemSubscription;
  onDeleteFoodItem: OnDeleteFoodItemSubscription;
  onCreateFoodItemRecommendations: OnCreateFoodItemRecommendationsSubscription;
  onUpdateFoodItemRecommendations: OnUpdateFoodItemRecommendationsSubscription;
  onDeleteFoodItemRecommendations: OnDeleteFoodItemRecommendationsSubscription;
  onCreateRestaurant: OnCreateRestaurantSubscription;
  onUpdateRestaurant: OnUpdateRestaurantSubscription;
  onDeleteRestaurant: OnDeleteRestaurantSubscription;
  onCreateComment: OnCreateCommentSubscription;
  onUpdateComment: OnUpdateCommentSubscription;
  onDeleteComment: OnDeleteCommentSubscription;
};

export type CreateFoodItemInput = {
  id?: string | null;
  name: string;
};

export type ModelFoodItemConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelFoodItemConditionInput | null> | null;
  or?: Array<ModelFoodItemConditionInput | null> | null;
  not?: ModelFoodItemConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type FoodItem = {
  __typename: "FoodItem";
  id: string;
  name: string;
  recommendedRestaurants?: ModelFoodItemRecommendationsConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelFoodItemRecommendationsConnection = {
  __typename: "ModelFoodItemRecommendationsConnection";
  items?: Array<FoodItemRecommendations | null> | null;
  nextToken?: string | null;
};

export type FoodItemRecommendations = {
  __typename: "FoodItemRecommendations";
  id: string;
  foodItemID: string;
  restaurantID: string;
  foodItem: FoodItem;
  restaurant: Restaurant;
  createdAt: string;
  updatedAt: string;
};

export type Restaurant = {
  __typename: "Restaurant";
  id: string;
  name: string;
  address: string;
  rank: number;
  lat: number;
  lng: number;
  googlePlaceId: string;
  recommendedFoodItems?: ModelFoodItemRecommendationsConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateFoodItemInput = {
  id: string;
  name?: string | null;
};

export type DeleteFoodItemInput = {
  id: string;
};

export type CreateFoodItemRecommendationsInput = {
  id?: string | null;
  foodItemID: string;
  restaurantID: string;
};

export type ModelFoodItemRecommendationsConditionInput = {
  foodItemID?: ModelIDInput | null;
  restaurantID?: ModelIDInput | null;
  and?: Array<ModelFoodItemRecommendationsConditionInput | null> | null;
  or?: Array<ModelFoodItemRecommendationsConditionInput | null> | null;
  not?: ModelFoodItemRecommendationsConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateFoodItemRecommendationsInput = {
  id: string;
  foodItemID?: string | null;
  restaurantID?: string | null;
};

export type DeleteFoodItemRecommendationsInput = {
  id: string;
};

export type CreateRestaurantInput = {
  id?: string | null;
  name: string;
  address: string;
  rank: number;
  lat: number;
  lng: number;
  googlePlaceId: string;
};

export type ModelRestaurantConditionInput = {
  name?: ModelStringInput | null;
  address?: ModelStringInput | null;
  rank?: ModelIntInput | null;
  lat?: ModelFloatInput | null;
  lng?: ModelFloatInput | null;
  googlePlaceId?: ModelStringInput | null;
  and?: Array<ModelRestaurantConditionInput | null> | null;
  or?: Array<ModelRestaurantConditionInput | null> | null;
  not?: ModelRestaurantConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateRestaurantInput = {
  id: string;
  name?: string | null;
  address?: string | null;
  rank?: number | null;
  lat?: number | null;
  lng?: number | null;
  googlePlaceId?: string | null;
};

export type DeleteRestaurantInput = {
  id: string;
};

export type CreateCommentInput = {
  id?: string | null;
  foodItemID: string;
  restaurantID: string;
  content: string;
  likes: number;
};

export type ModelCommentConditionInput = {
  foodItemID?: ModelIDInput | null;
  restaurantID?: ModelIDInput | null;
  content?: ModelStringInput | null;
  likes?: ModelIntInput | null;
  and?: Array<ModelCommentConditionInput | null> | null;
  or?: Array<ModelCommentConditionInput | null> | null;
  not?: ModelCommentConditionInput | null;
};

export type Comment = {
  __typename: "Comment";
  id: string;
  foodItemID: string;
  foodItem?: FoodItem | null;
  restaurantID: string;
  restaurant?: Restaurant | null;
  content: string;
  likes: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCommentInput = {
  id: string;
  foodItemID?: string | null;
  restaurantID?: string | null;
  content?: string | null;
  likes?: number | null;
};

export type DeleteCommentInput = {
  id: string;
};

export type ModelFoodItemFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelFoodItemFilterInput | null> | null;
  or?: Array<ModelFoodItemFilterInput | null> | null;
  not?: ModelFoodItemFilterInput | null;
};

export type ModelFoodItemConnection = {
  __typename: "ModelFoodItemConnection";
  items?: Array<FoodItem | null> | null;
  nextToken?: string | null;
};

export type ModelRestaurantFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  address?: ModelStringInput | null;
  rank?: ModelIntInput | null;
  lat?: ModelFloatInput | null;
  lng?: ModelFloatInput | null;
  googlePlaceId?: ModelStringInput | null;
  and?: Array<ModelRestaurantFilterInput | null> | null;
  or?: Array<ModelRestaurantFilterInput | null> | null;
  not?: ModelRestaurantFilterInput | null;
};

export type ModelRestaurantConnection = {
  __typename: "ModelRestaurantConnection";
  items?: Array<Restaurant | null> | null;
  nextToken?: string | null;
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null;
  foodItemID?: ModelIDInput | null;
  restaurantID?: ModelIDInput | null;
  content?: ModelStringInput | null;
  likes?: ModelIntInput | null;
  and?: Array<ModelCommentFilterInput | null> | null;
  or?: Array<ModelCommentFilterInput | null> | null;
  not?: ModelCommentFilterInput | null;
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection";
  items?: Array<Comment | null> | null;
  nextToken?: string | null;
};

export type CreateFoodItemMutation = {
  __typename: "FoodItem";
  id: string;
  name: string;
  recommendedRestaurants?: {
    __typename: "ModelFoodItemRecommendationsConnection";
    items?: Array<{
      __typename: "FoodItemRecommendations";
      id: string;
      foodItemID: string;
      restaurantID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateFoodItemMutation = {
  __typename: "FoodItem";
  id: string;
  name: string;
  recommendedRestaurants?: {
    __typename: "ModelFoodItemRecommendationsConnection";
    items?: Array<{
      __typename: "FoodItemRecommendations";
      id: string;
      foodItemID: string;
      restaurantID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteFoodItemMutation = {
  __typename: "FoodItem";
  id: string;
  name: string;
  recommendedRestaurants?: {
    __typename: "ModelFoodItemRecommendationsConnection";
    items?: Array<{
      __typename: "FoodItemRecommendations";
      id: string;
      foodItemID: string;
      restaurantID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateFoodItemRecommendationsMutation = {
  __typename: "FoodItemRecommendations";
  id: string;
  foodItemID: string;
  restaurantID: string;
  foodItem: {
    __typename: "FoodItem";
    id: string;
    name: string;
    recommendedRestaurants?: {
      __typename: "ModelFoodItemRecommendationsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  restaurant: {
    __typename: "Restaurant";
    id: string;
    name: string;
    address: string;
    rank: number;
    lat: number;
    lng: number;
    googlePlaceId: string;
    recommendedFoodItems?: {
      __typename: "ModelFoodItemRecommendationsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type UpdateFoodItemRecommendationsMutation = {
  __typename: "FoodItemRecommendations";
  id: string;
  foodItemID: string;
  restaurantID: string;
  foodItem: {
    __typename: "FoodItem";
    id: string;
    name: string;
    recommendedRestaurants?: {
      __typename: "ModelFoodItemRecommendationsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  restaurant: {
    __typename: "Restaurant";
    id: string;
    name: string;
    address: string;
    rank: number;
    lat: number;
    lng: number;
    googlePlaceId: string;
    recommendedFoodItems?: {
      __typename: "ModelFoodItemRecommendationsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type DeleteFoodItemRecommendationsMutation = {
  __typename: "FoodItemRecommendations";
  id: string;
  foodItemID: string;
  restaurantID: string;
  foodItem: {
    __typename: "FoodItem";
    id: string;
    name: string;
    recommendedRestaurants?: {
      __typename: "ModelFoodItemRecommendationsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  restaurant: {
    __typename: "Restaurant";
    id: string;
    name: string;
    address: string;
    rank: number;
    lat: number;
    lng: number;
    googlePlaceId: string;
    recommendedFoodItems?: {
      __typename: "ModelFoodItemRecommendationsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type CreateRestaurantMutation = {
  __typename: "Restaurant";
  id: string;
  name: string;
  address: string;
  rank: number;
  lat: number;
  lng: number;
  googlePlaceId: string;
  recommendedFoodItems?: {
    __typename: "ModelFoodItemRecommendationsConnection";
    items?: Array<{
      __typename: "FoodItemRecommendations";
      id: string;
      foodItemID: string;
      restaurantID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRestaurantMutation = {
  __typename: "Restaurant";
  id: string;
  name: string;
  address: string;
  rank: number;
  lat: number;
  lng: number;
  googlePlaceId: string;
  recommendedFoodItems?: {
    __typename: "ModelFoodItemRecommendationsConnection";
    items?: Array<{
      __typename: "FoodItemRecommendations";
      id: string;
      foodItemID: string;
      restaurantID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteRestaurantMutation = {
  __typename: "Restaurant";
  id: string;
  name: string;
  address: string;
  rank: number;
  lat: number;
  lng: number;
  googlePlaceId: string;
  recommendedFoodItems?: {
    __typename: "ModelFoodItemRecommendationsConnection";
    items?: Array<{
      __typename: "FoodItemRecommendations";
      id: string;
      foodItemID: string;
      restaurantID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateCommentMutation = {
  __typename: "Comment";
  id: string;
  foodItemID: string;
  foodItem?: {
    __typename: "FoodItem";
    id: string;
    name: string;
    recommendedRestaurants?: {
      __typename: "ModelFoodItemRecommendationsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  restaurantID: string;
  restaurant?: {
    __typename: "Restaurant";
    id: string;
    name: string;
    address: string;
    rank: number;
    lat: number;
    lng: number;
    googlePlaceId: string;
    recommendedFoodItems?: {
      __typename: "ModelFoodItemRecommendationsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string;
  likes: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCommentMutation = {
  __typename: "Comment";
  id: string;
  foodItemID: string;
  foodItem?: {
    __typename: "FoodItem";
    id: string;
    name: string;
    recommendedRestaurants?: {
      __typename: "ModelFoodItemRecommendationsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  restaurantID: string;
  restaurant?: {
    __typename: "Restaurant";
    id: string;
    name: string;
    address: string;
    rank: number;
    lat: number;
    lng: number;
    googlePlaceId: string;
    recommendedFoodItems?: {
      __typename: "ModelFoodItemRecommendationsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string;
  likes: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCommentMutation = {
  __typename: "Comment";
  id: string;
  foodItemID: string;
  foodItem?: {
    __typename: "FoodItem";
    id: string;
    name: string;
    recommendedRestaurants?: {
      __typename: "ModelFoodItemRecommendationsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  restaurantID: string;
  restaurant?: {
    __typename: "Restaurant";
    id: string;
    name: string;
    address: string;
    rank: number;
    lat: number;
    lng: number;
    googlePlaceId: string;
    recommendedFoodItems?: {
      __typename: "ModelFoodItemRecommendationsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string;
  likes: number;
  createdAt: string;
  updatedAt: string;
};

export type GetFoodItemQuery = {
  __typename: "FoodItem";
  id: string;
  name: string;
  recommendedRestaurants?: {
    __typename: "ModelFoodItemRecommendationsConnection";
    items?: Array<{
      __typename: "FoodItemRecommendations";
      id: string;
      foodItemID: string;
      restaurantID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListFoodItemsQuery = {
  __typename: "ModelFoodItemConnection";
  items?: Array<{
    __typename: "FoodItem";
    id: string;
    name: string;
    recommendedRestaurants?: {
      __typename: "ModelFoodItemRecommendationsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetRestaurantQuery = {
  __typename: "Restaurant";
  id: string;
  name: string;
  address: string;
  rank: number;
  lat: number;
  lng: number;
  googlePlaceId: string;
  recommendedFoodItems?: {
    __typename: "ModelFoodItemRecommendationsConnection";
    items?: Array<{
      __typename: "FoodItemRecommendations";
      id: string;
      foodItemID: string;
      restaurantID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListRestaurantsQuery = {
  __typename: "ModelRestaurantConnection";
  items?: Array<{
    __typename: "Restaurant";
    id: string;
    name: string;
    address: string;
    rank: number;
    lat: number;
    lng: number;
    googlePlaceId: string;
    recommendedFoodItems?: {
      __typename: "ModelFoodItemRecommendationsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetCommentQuery = {
  __typename: "Comment";
  id: string;
  foodItemID: string;
  foodItem?: {
    __typename: "FoodItem";
    id: string;
    name: string;
    recommendedRestaurants?: {
      __typename: "ModelFoodItemRecommendationsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  restaurantID: string;
  restaurant?: {
    __typename: "Restaurant";
    id: string;
    name: string;
    address: string;
    rank: number;
    lat: number;
    lng: number;
    googlePlaceId: string;
    recommendedFoodItems?: {
      __typename: "ModelFoodItemRecommendationsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string;
  likes: number;
  createdAt: string;
  updatedAt: string;
};

export type ListCommentsQuery = {
  __typename: "ModelCommentConnection";
  items?: Array<{
    __typename: "Comment";
    id: string;
    foodItemID: string;
    foodItem?: {
      __typename: "FoodItem";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    restaurantID: string;
    restaurant?: {
      __typename: "Restaurant";
      id: string;
      name: string;
      address: string;
      rank: number;
      lat: number;
      lng: number;
      googlePlaceId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    content: string;
    likes: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateFoodItemSubscription = {
  __typename: "FoodItem";
  id: string;
  name: string;
  recommendedRestaurants?: {
    __typename: "ModelFoodItemRecommendationsConnection";
    items?: Array<{
      __typename: "FoodItemRecommendations";
      id: string;
      foodItemID: string;
      restaurantID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateFoodItemSubscription = {
  __typename: "FoodItem";
  id: string;
  name: string;
  recommendedRestaurants?: {
    __typename: "ModelFoodItemRecommendationsConnection";
    items?: Array<{
      __typename: "FoodItemRecommendations";
      id: string;
      foodItemID: string;
      restaurantID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteFoodItemSubscription = {
  __typename: "FoodItem";
  id: string;
  name: string;
  recommendedRestaurants?: {
    __typename: "ModelFoodItemRecommendationsConnection";
    items?: Array<{
      __typename: "FoodItemRecommendations";
      id: string;
      foodItemID: string;
      restaurantID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateFoodItemRecommendationsSubscription = {
  __typename: "FoodItemRecommendations";
  id: string;
  foodItemID: string;
  restaurantID: string;
  foodItem: {
    __typename: "FoodItem";
    id: string;
    name: string;
    recommendedRestaurants?: {
      __typename: "ModelFoodItemRecommendationsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  restaurant: {
    __typename: "Restaurant";
    id: string;
    name: string;
    address: string;
    rank: number;
    lat: number;
    lng: number;
    googlePlaceId: string;
    recommendedFoodItems?: {
      __typename: "ModelFoodItemRecommendationsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateFoodItemRecommendationsSubscription = {
  __typename: "FoodItemRecommendations";
  id: string;
  foodItemID: string;
  restaurantID: string;
  foodItem: {
    __typename: "FoodItem";
    id: string;
    name: string;
    recommendedRestaurants?: {
      __typename: "ModelFoodItemRecommendationsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  restaurant: {
    __typename: "Restaurant";
    id: string;
    name: string;
    address: string;
    rank: number;
    lat: number;
    lng: number;
    googlePlaceId: string;
    recommendedFoodItems?: {
      __typename: "ModelFoodItemRecommendationsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteFoodItemRecommendationsSubscription = {
  __typename: "FoodItemRecommendations";
  id: string;
  foodItemID: string;
  restaurantID: string;
  foodItem: {
    __typename: "FoodItem";
    id: string;
    name: string;
    recommendedRestaurants?: {
      __typename: "ModelFoodItemRecommendationsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  restaurant: {
    __typename: "Restaurant";
    id: string;
    name: string;
    address: string;
    rank: number;
    lat: number;
    lng: number;
    googlePlaceId: string;
    recommendedFoodItems?: {
      __typename: "ModelFoodItemRecommendationsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnCreateRestaurantSubscription = {
  __typename: "Restaurant";
  id: string;
  name: string;
  address: string;
  rank: number;
  lat: number;
  lng: number;
  googlePlaceId: string;
  recommendedFoodItems?: {
    __typename: "ModelFoodItemRecommendationsConnection";
    items?: Array<{
      __typename: "FoodItemRecommendations";
      id: string;
      foodItemID: string;
      restaurantID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateRestaurantSubscription = {
  __typename: "Restaurant";
  id: string;
  name: string;
  address: string;
  rank: number;
  lat: number;
  lng: number;
  googlePlaceId: string;
  recommendedFoodItems?: {
    __typename: "ModelFoodItemRecommendationsConnection";
    items?: Array<{
      __typename: "FoodItemRecommendations";
      id: string;
      foodItemID: string;
      restaurantID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteRestaurantSubscription = {
  __typename: "Restaurant";
  id: string;
  name: string;
  address: string;
  rank: number;
  lat: number;
  lng: number;
  googlePlaceId: string;
  recommendedFoodItems?: {
    __typename: "ModelFoodItemRecommendationsConnection";
    items?: Array<{
      __typename: "FoodItemRecommendations";
      id: string;
      foodItemID: string;
      restaurantID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCommentSubscription = {
  __typename: "Comment";
  id: string;
  foodItemID: string;
  foodItem?: {
    __typename: "FoodItem";
    id: string;
    name: string;
    recommendedRestaurants?: {
      __typename: "ModelFoodItemRecommendationsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  restaurantID: string;
  restaurant?: {
    __typename: "Restaurant";
    id: string;
    name: string;
    address: string;
    rank: number;
    lat: number;
    lng: number;
    googlePlaceId: string;
    recommendedFoodItems?: {
      __typename: "ModelFoodItemRecommendationsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string;
  likes: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCommentSubscription = {
  __typename: "Comment";
  id: string;
  foodItemID: string;
  foodItem?: {
    __typename: "FoodItem";
    id: string;
    name: string;
    recommendedRestaurants?: {
      __typename: "ModelFoodItemRecommendationsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  restaurantID: string;
  restaurant?: {
    __typename: "Restaurant";
    id: string;
    name: string;
    address: string;
    rank: number;
    lat: number;
    lng: number;
    googlePlaceId: string;
    recommendedFoodItems?: {
      __typename: "ModelFoodItemRecommendationsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string;
  likes: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCommentSubscription = {
  __typename: "Comment";
  id: string;
  foodItemID: string;
  foodItem?: {
    __typename: "FoodItem";
    id: string;
    name: string;
    recommendedRestaurants?: {
      __typename: "ModelFoodItemRecommendationsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  restaurantID: string;
  restaurant?: {
    __typename: "Restaurant";
    id: string;
    name: string;
    address: string;
    rank: number;
    lat: number;
    lng: number;
    googlePlaceId: string;
    recommendedFoodItems?: {
      __typename: "ModelFoodItemRecommendationsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string;
  likes: number;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateFoodItem(
    input: CreateFoodItemInput,
    condition?: ModelFoodItemConditionInput
  ): Promise<CreateFoodItemMutation> {
    const statement = `mutation CreateFoodItem($input: CreateFoodItemInput!, $condition: ModelFoodItemConditionInput) {
        createFoodItem(input: $input, condition: $condition) {
          __typename
          id
          name
          recommendedRestaurants {
            __typename
            items {
              __typename
              id
              foodItemID
              restaurantID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateFoodItemMutation>response.data.createFoodItem;
  }
  async UpdateFoodItem(
    input: UpdateFoodItemInput,
    condition?: ModelFoodItemConditionInput
  ): Promise<UpdateFoodItemMutation> {
    const statement = `mutation UpdateFoodItem($input: UpdateFoodItemInput!, $condition: ModelFoodItemConditionInput) {
        updateFoodItem(input: $input, condition: $condition) {
          __typename
          id
          name
          recommendedRestaurants {
            __typename
            items {
              __typename
              id
              foodItemID
              restaurantID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateFoodItemMutation>response.data.updateFoodItem;
  }
  async DeleteFoodItem(
    input: DeleteFoodItemInput,
    condition?: ModelFoodItemConditionInput
  ): Promise<DeleteFoodItemMutation> {
    const statement = `mutation DeleteFoodItem($input: DeleteFoodItemInput!, $condition: ModelFoodItemConditionInput) {
        deleteFoodItem(input: $input, condition: $condition) {
          __typename
          id
          name
          recommendedRestaurants {
            __typename
            items {
              __typename
              id
              foodItemID
              restaurantID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteFoodItemMutation>response.data.deleteFoodItem;
  }
  async CreateFoodItemRecommendations(
    input: CreateFoodItemRecommendationsInput,
    condition?: ModelFoodItemRecommendationsConditionInput
  ): Promise<CreateFoodItemRecommendationsMutation> {
    const statement = `mutation CreateFoodItemRecommendations($input: CreateFoodItemRecommendationsInput!, $condition: ModelFoodItemRecommendationsConditionInput) {
        createFoodItemRecommendations(input: $input, condition: $condition) {
          __typename
          id
          foodItemID
          restaurantID
          foodItem {
            __typename
            id
            name
            recommendedRestaurants {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          restaurant {
            __typename
            id
            name
            address
            rank
            lat
            lng
            googlePlaceId
            recommendedFoodItems {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateFoodItemRecommendationsMutation>(
      response.data.createFoodItemRecommendations
    );
  }
  async UpdateFoodItemRecommendations(
    input: UpdateFoodItemRecommendationsInput,
    condition?: ModelFoodItemRecommendationsConditionInput
  ): Promise<UpdateFoodItemRecommendationsMutation> {
    const statement = `mutation UpdateFoodItemRecommendations($input: UpdateFoodItemRecommendationsInput!, $condition: ModelFoodItemRecommendationsConditionInput) {
        updateFoodItemRecommendations(input: $input, condition: $condition) {
          __typename
          id
          foodItemID
          restaurantID
          foodItem {
            __typename
            id
            name
            recommendedRestaurants {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          restaurant {
            __typename
            id
            name
            address
            rank
            lat
            lng
            googlePlaceId
            recommendedFoodItems {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateFoodItemRecommendationsMutation>(
      response.data.updateFoodItemRecommendations
    );
  }
  async DeleteFoodItemRecommendations(
    input: DeleteFoodItemRecommendationsInput,
    condition?: ModelFoodItemRecommendationsConditionInput
  ): Promise<DeleteFoodItemRecommendationsMutation> {
    const statement = `mutation DeleteFoodItemRecommendations($input: DeleteFoodItemRecommendationsInput!, $condition: ModelFoodItemRecommendationsConditionInput) {
        deleteFoodItemRecommendations(input: $input, condition: $condition) {
          __typename
          id
          foodItemID
          restaurantID
          foodItem {
            __typename
            id
            name
            recommendedRestaurants {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          restaurant {
            __typename
            id
            name
            address
            rank
            lat
            lng
            googlePlaceId
            recommendedFoodItems {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteFoodItemRecommendationsMutation>(
      response.data.deleteFoodItemRecommendations
    );
  }
  async CreateRestaurant(
    input: CreateRestaurantInput,
    condition?: ModelRestaurantConditionInput
  ): Promise<CreateRestaurantMutation> {
    const statement = `mutation CreateRestaurant($input: CreateRestaurantInput!, $condition: ModelRestaurantConditionInput) {
        createRestaurant(input: $input, condition: $condition) {
          __typename
          id
          name
          address
          rank
          lat
          lng
          googlePlaceId
          recommendedFoodItems {
            __typename
            items {
              __typename
              id
              foodItemID
              restaurantID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRestaurantMutation>response.data.createRestaurant;
  }
  async UpdateRestaurant(
    input: UpdateRestaurantInput,
    condition?: ModelRestaurantConditionInput
  ): Promise<UpdateRestaurantMutation> {
    const statement = `mutation UpdateRestaurant($input: UpdateRestaurantInput!, $condition: ModelRestaurantConditionInput) {
        updateRestaurant(input: $input, condition: $condition) {
          __typename
          id
          name
          address
          rank
          lat
          lng
          googlePlaceId
          recommendedFoodItems {
            __typename
            items {
              __typename
              id
              foodItemID
              restaurantID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRestaurantMutation>response.data.updateRestaurant;
  }
  async DeleteRestaurant(
    input: DeleteRestaurantInput,
    condition?: ModelRestaurantConditionInput
  ): Promise<DeleteRestaurantMutation> {
    const statement = `mutation DeleteRestaurant($input: DeleteRestaurantInput!, $condition: ModelRestaurantConditionInput) {
        deleteRestaurant(input: $input, condition: $condition) {
          __typename
          id
          name
          address
          rank
          lat
          lng
          googlePlaceId
          recommendedFoodItems {
            __typename
            items {
              __typename
              id
              foodItemID
              restaurantID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRestaurantMutation>response.data.deleteRestaurant;
  }
  async CreateComment(
    input: CreateCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<CreateCommentMutation> {
    const statement = `mutation CreateComment($input: CreateCommentInput!, $condition: ModelCommentConditionInput) {
        createComment(input: $input, condition: $condition) {
          __typename
          id
          foodItemID
          foodItem {
            __typename
            id
            name
            recommendedRestaurants {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          restaurantID
          restaurant {
            __typename
            id
            name
            address
            rank
            lat
            lng
            googlePlaceId
            recommendedFoodItems {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          content
          likes
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCommentMutation>response.data.createComment;
  }
  async UpdateComment(
    input: UpdateCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<UpdateCommentMutation> {
    const statement = `mutation UpdateComment($input: UpdateCommentInput!, $condition: ModelCommentConditionInput) {
        updateComment(input: $input, condition: $condition) {
          __typename
          id
          foodItemID
          foodItem {
            __typename
            id
            name
            recommendedRestaurants {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          restaurantID
          restaurant {
            __typename
            id
            name
            address
            rank
            lat
            lng
            googlePlaceId
            recommendedFoodItems {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          content
          likes
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCommentMutation>response.data.updateComment;
  }
  async DeleteComment(
    input: DeleteCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<DeleteCommentMutation> {
    const statement = `mutation DeleteComment($input: DeleteCommentInput!, $condition: ModelCommentConditionInput) {
        deleteComment(input: $input, condition: $condition) {
          __typename
          id
          foodItemID
          foodItem {
            __typename
            id
            name
            recommendedRestaurants {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          restaurantID
          restaurant {
            __typename
            id
            name
            address
            rank
            lat
            lng
            googlePlaceId
            recommendedFoodItems {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          content
          likes
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCommentMutation>response.data.deleteComment;
  }
  async GetFoodItem(id: string): Promise<GetFoodItemQuery> {
    const statement = `query GetFoodItem($id: ID!) {
        getFoodItem(id: $id) {
          __typename
          id
          name
          recommendedRestaurants {
            __typename
            items {
              __typename
              id
              foodItemID
              restaurantID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetFoodItemQuery>response.data.getFoodItem;
  }
  async ListFoodItems(
    filter?: ModelFoodItemFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListFoodItemsQuery> {
    const statement = `query ListFoodItems($filter: ModelFoodItemFilterInput, $limit: Int, $nextToken: String) {
        listFoodItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            recommendedRestaurants {
              __typename
              items {
                restaurant {
                  id
                  name
                  address
                  rank
                  lat
                  lng
                  googlePlaceId
                }
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListFoodItemsQuery>response.data.listFoodItems;
  }
  async GetRestaurant(id: string): Promise<GetRestaurantQuery> {
    const statement = `query GetRestaurant($id: ID!) {
        getRestaurant(id: $id) {
          __typename
          id
          name
          address
          rank
          lat
          lng
          googlePlaceId
          recommendedFoodItems {
            __typename
            items {
              __typename
              id
              foodItemID
              restaurantID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRestaurantQuery>response.data.getRestaurant;
  }
  async ListRestaurants(
    filter?: ModelRestaurantFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRestaurantsQuery> {
    const statement = `query ListRestaurants($filter: ModelRestaurantFilterInput, $limit: Int, $nextToken: String) {
        listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            address
            rank
            lat
            lng
            googlePlaceId
            recommendedFoodItems {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRestaurantsQuery>response.data.listRestaurants;
  }
  async GetComment(id: string): Promise<GetCommentQuery> {
    const statement = `query GetComment($id: ID!) {
        getComment(id: $id) {
          __typename
          id
          foodItemID
          foodItem {
            __typename
            id
            name
            recommendedRestaurants {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          restaurantID
          restaurant {
            __typename
            id
            name
            address
            rank
            lat
            lng
            googlePlaceId
            recommendedFoodItems {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          content
          likes
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCommentQuery>response.data.getComment;
  }
  async ListComments(
    filter?: ModelCommentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCommentsQuery> {
    const statement = `query ListComments($filter: ModelCommentFilterInput, $limit: Int, $nextToken: String) {
        listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            foodItemID
            foodItem {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            restaurantID
            restaurant {
              __typename
              id
              name
              address
              rank
              lat
              lng
              googlePlaceId
              createdAt
              updatedAt
            }
            content
            likes
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCommentsQuery>response.data.listComments;
  }
  OnCreateFoodItemListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateFoodItem">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateFoodItem {
        onCreateFoodItem {
          __typename
          id
          name
          recommendedRestaurants {
            __typename
            items {
              __typename
              id
              foodItemID
              restaurantID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateFoodItem">>
  >;

  OnUpdateFoodItemListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateFoodItem">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateFoodItem {
        onUpdateFoodItem {
          __typename
          id
          name
          recommendedRestaurants {
            __typename
            items {
              __typename
              id
              foodItemID
              restaurantID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateFoodItem">>
  >;

  OnDeleteFoodItemListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteFoodItem">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteFoodItem {
        onDeleteFoodItem {
          __typename
          id
          name
          recommendedRestaurants {
            __typename
            items {
              __typename
              id
              foodItemID
              restaurantID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteFoodItem">>
  >;

  OnCreateFoodItemRecommendationsListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateFoodItemRecommendations">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateFoodItemRecommendations {
        onCreateFoodItemRecommendations {
          __typename
          id
          foodItemID
          restaurantID
          foodItem {
            __typename
            id
            name
            recommendedRestaurants {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          restaurant {
            __typename
            id
            name
            address
            rank
            lat
            lng
            googlePlaceId
            recommendedFoodItems {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateFoodItemRecommendations">
    >
  >;

  OnUpdateFoodItemRecommendationsListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateFoodItemRecommendations">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateFoodItemRecommendations {
        onUpdateFoodItemRecommendations {
          __typename
          id
          foodItemID
          restaurantID
          foodItem {
            __typename
            id
            name
            recommendedRestaurants {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          restaurant {
            __typename
            id
            name
            address
            rank
            lat
            lng
            googlePlaceId
            recommendedFoodItems {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateFoodItemRecommendations">
    >
  >;

  OnDeleteFoodItemRecommendationsListener: Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteFoodItemRecommendations">
    >
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteFoodItemRecommendations {
        onDeleteFoodItemRecommendations {
          __typename
          id
          foodItemID
          restaurantID
          foodItem {
            __typename
            id
            name
            recommendedRestaurants {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          restaurant {
            __typename
            id
            name
            address
            rank
            lat
            lng
            googlePlaceId
            recommendedFoodItems {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteFoodItemRecommendations">
    >
  >;

  OnCreateRestaurantListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRestaurant">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateRestaurant {
        onCreateRestaurant {
          __typename
          id
          name
          address
          rank
          lat
          lng
          googlePlaceId
          recommendedFoodItems {
            __typename
            items {
              __typename
              id
              foodItemID
              restaurantID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRestaurant">>
  >;

  OnUpdateRestaurantListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRestaurant">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateRestaurant {
        onUpdateRestaurant {
          __typename
          id
          name
          address
          rank
          lat
          lng
          googlePlaceId
          recommendedFoodItems {
            __typename
            items {
              __typename
              id
              foodItemID
              restaurantID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRestaurant">>
  >;

  OnDeleteRestaurantListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRestaurant">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteRestaurant {
        onDeleteRestaurant {
          __typename
          id
          name
          address
          rank
          lat
          lng
          googlePlaceId
          recommendedFoodItems {
            __typename
            items {
              __typename
              id
              foodItemID
              restaurantID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRestaurant">>
  >;

  OnCreateCommentListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateComment">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateComment {
        onCreateComment {
          __typename
          id
          foodItemID
          foodItem {
            __typename
            id
            name
            recommendedRestaurants {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          restaurantID
          restaurant {
            __typename
            id
            name
            address
            rank
            lat
            lng
            googlePlaceId
            recommendedFoodItems {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          content
          likes
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateComment">>
  >;

  OnUpdateCommentListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateComment">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateComment {
        onUpdateComment {
          __typename
          id
          foodItemID
          foodItem {
            __typename
            id
            name
            recommendedRestaurants {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          restaurantID
          restaurant {
            __typename
            id
            name
            address
            rank
            lat
            lng
            googlePlaceId
            recommendedFoodItems {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          content
          likes
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateComment">>
  >;

  OnDeleteCommentListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteComment">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteComment {
        onDeleteComment {
          __typename
          id
          foodItemID
          foodItem {
            __typename
            id
            name
            recommendedRestaurants {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          restaurantID
          restaurant {
            __typename
            id
            name
            address
            rank
            lat
            lng
            googlePlaceId
            recommendedFoodItems {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          content
          likes
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteComment">>
  >;
}
