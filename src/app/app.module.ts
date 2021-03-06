import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodSearchBarComponent, FoodSearchPageComponent, LocationOverlayComponent, MapComponent, RecommendationOverlayComponent, RestaurantListComponent, RestaurantListItemComponent, SidebarComponent, SplashScreenComponent } from './components';

import {AutoCompleteModule} from 'primeng/autocomplete';
import {ButtonModule} from 'primeng/button';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {GMapModule} from 'primeng/gmap';
import {InputTextModule} from 'primeng/inputtext';
import { IonicModule } from '@ionic/angular';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FoodItemEffects } from './store/food-item/food-item.effects';
import { reducers } from './reducers';
import { RestaurantEffects } from './store/restaurant/restaurant.effects';
import { RecommendationEffects } from './store/recommendation/recommendation.effects';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    RestaurantListComponent,
    RestaurantListItemComponent,
    FoodSearchPageComponent,
    SidebarComponent,
    FoodSearchBarComponent,
    RecommendationOverlayComponent,
    SplashScreenComponent,
    LocationOverlayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    AutoCompleteModule,
    ButtonModule,
    DynamicDialogModule,
    GMapModule,
    InputTextModule,
    IonicModule.forRoot(),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      FoodItemEffects,
      RestaurantEffects,
      RecommendationEffects
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RecommendationOverlayComponent, LocationOverlayComponent]
})
export class AppModule { }
