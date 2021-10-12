import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveclassBannerComponent } from './liveclass-banner.component';

describe('LiveclassBannerComponent', () => {
  let component: LiveclassBannerComponent;
  let fixture: ComponentFixture<LiveclassBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveclassBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveclassBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
