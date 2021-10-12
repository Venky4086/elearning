import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyboostbannersComponent } from './dailyboostbanners.component';

describe('DailyboostbannersComponent', () => {
  let component: DailyboostbannersComponent;
  let fixture: ComponentFixture<DailyboostbannersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyboostbannersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyboostbannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
