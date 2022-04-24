import { createSelector } from "@ngrx/store";
import { RecommendationState } from './recommendation.reducers';

const selectRecommendationState = (state: any) => state.recommendation;

export const getIsCreatingRecommendationState = createSelector(
  selectRecommendationState,
  (state: RecommendationState) => (state ? state.isCreatingRecommendation : null)
);
