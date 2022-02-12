import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationOverlayComponent } from './recommendation-overlay.component';

describe('RecommendationOverlayComponent', () => {
  let component: RecommendationOverlayComponent;
  let fixture: ComponentFixture<RecommendationOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendationOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
