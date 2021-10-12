import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyboostComponent } from './dailyboost.component';

describe('DailyboostComponent', () => {
  let component: DailyboostComponent;
  let fixture: ComponentFixture<DailyboostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyboostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyboostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
