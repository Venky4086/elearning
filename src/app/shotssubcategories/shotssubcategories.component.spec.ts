import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShotssubcategoriesComponent } from './shotssubcategories.component';

describe('ShotssubcategoriesComponent', () => {
  let component: ShotssubcategoriesComponent;
  let fixture: ComponentFixture<ShotssubcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShotssubcategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShotssubcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
