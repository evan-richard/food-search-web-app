import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { APIService } from 'src/app/services';
import { createRecommendationAction, createRecommendationFailureAction, createRecommendationSuccessAction } from './recommendation.actions';
import { RecommendationState } from './recommendation.reducers';
import { from, of } from 'rxjs';

@Injectable()
export class RecommendationEffects {
  constructor(
    private actions$: Actions,
    private store: Store<RecommendationState>,
    private apiService: APIService
  ) {}

  createRecommendation$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createRecommendationAction),
        switchMap((payload) => {
          // CREATE A NEW RECOMMENDATION
          return from(this.apiService.CreateFoodItemRecommendation(payload.recommendation)).pipe(
            map((event) => {
              console.log("recommendation mapped!");
              return createRecommendationSuccessAction();
            }),
            catchError((error) => {
              console.log("error mapping recommendation...", error);
              return of(createRecommendationFailureAction({ error: error }));
            })
          );
        })
      ),
    { dispatch: true }
  );
}
