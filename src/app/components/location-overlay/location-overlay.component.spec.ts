import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationOverlayComponent } from './location-overlay.component';

describe('LocationOverlayComponent', () => {
  let component: LocationOverlayComponent;
  let fixture: ComponentFixture<LocationOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
