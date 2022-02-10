import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodSearchBarComponent, FoodSearchPageComponent, MapComponent, RestaurantListComponent, RestaurantListItemComponent, SidebarComponent } from './components';

import {ButtonModule} from 'primeng/button';
import {GMapModule} from 'primeng/gmap';
import {InputTextModule} from 'primeng/inputtext';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    RestaurantListComponent,
    RestaurantListItemComponent,
    FoodSearchPageComponent,
    SidebarComponent,
    FoodSearchBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    ButtonModule,
    GMapModule,
    InputTextModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
