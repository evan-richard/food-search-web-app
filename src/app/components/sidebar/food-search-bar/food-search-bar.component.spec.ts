import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodSearchBarComponent } from './food-search-bar.component';

describe('FoodSearchBarComponent', () => {
  let component: FoodSearchBarComponent;
  let fixture: ComponentFixture<FoodSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodSearchBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
