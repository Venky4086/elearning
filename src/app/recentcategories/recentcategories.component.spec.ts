import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentcategoriesComponent } from './recentcategories.component';

describe('RecentcategoriesComponent', () => {
  let component: RecentcategoriesComponent;
  let fixture: ComponentFixture<RecentcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentcategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
