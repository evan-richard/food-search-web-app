import { createReducer, on, Action } from "@ngrx/store";
import { createRecommendationAction, createRecommendationFailureAction, createRecommendationSuccessAction } from './recommendation.actions';

export const recommendationStateKey = "recommendation";

export interface RecommendationState {
  isCreatingRecommendation: boolean;
}

const inititalState: RecommendationState = {
  isCreatingRecommendation: false
};

const reducers = createReducer(
  inititalState,
  on(createRecommendationAction, (state: RecommendationState) => {
    return {
      ...state,
      isCreatingRecommendation: true
    };
  }),
  on(createRecommendationSuccessAction, (state: RecommendationState) => {
    return {
      ...state,
      isCreatingRecommendation: false
    }
  }),
  on(createRecommendationFailureAction, (state: RecommendationState) => {
    return {
      ...state,
      isCreatingRecommendation: false
    }
  }),
);

export function recommendationReducer(state: RecommendationState | undefined, action: Action) {
  return reducers(state, action);
}
