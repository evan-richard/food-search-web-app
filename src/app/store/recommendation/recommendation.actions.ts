import { createAction, props } from "@ngrx/store";
import { CreateFoodItemRecommendationInput } from 'src/app/services';

export const recommendationActionTypes = {
  CREATE_RECOMMENDATION: "[Recommendation] Create Recommendation",
  CREATE_RECOMMENDATION_SUCCESS: "[Recommendation] Create Recommendation Success",
  CREATE_RECOMMENDATION_FAILURE: "[Recommendation] Create Recommendation Failure"
};

export const createRecommendationAction = createAction(
  recommendationActionTypes.CREATE_RECOMMENDATION,
  props<{ recommendation: CreateFoodItemRecommendationInput }>()
);

export const createRecommendationSuccessAction = createAction(
  recommendationActionTypes.CREATE_RECOMMENDATION_SUCCESS
);

export const createRecommendationFailureAction = createAction(
  recommendationActionTypes.CREATE_RECOMMENDATION_FAILURE,
  props<{ error: any }>()
);
