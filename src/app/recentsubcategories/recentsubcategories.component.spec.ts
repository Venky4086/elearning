import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentsubcategoriesComponent } from './recentsubcategories.component';

describe('RecentsubcategoriesComponent', () => {
  let component: RecentsubcategoriesComponent;
  let fixture: ComponentFixture<RecentsubcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentsubcategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentsubcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
