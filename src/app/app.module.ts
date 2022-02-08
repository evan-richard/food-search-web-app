import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodSearchComponent, MapComponent, RestaurantListComponent, RestaurantListItemComponent } from './components';

import {OverlayPanelModule} from 'primeng/overlaypanel';
import { FoodSearchPageComponent } from './components/food-search-page/food-search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    FoodSearchComponent,
    RestaurantListComponent,
    RestaurantListItemComponent,
    FoodSearchPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    OverlayPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
