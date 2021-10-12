import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastexamcategoriesComponent } from './pastexamcategories.component';

describe('PastexamcategoriesComponent', () => {
  let component: PastexamcategoriesComponent;
  let fixture: ComponentFixture<PastexamcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastexamcategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastexamcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
