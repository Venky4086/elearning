import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastexamsubcategoriesComponent } from './pastexamsubcategories.component';

describe('PastexamsubcategoriesComponent', () => {
  let component: PastexamsubcategoriesComponent;
  let fixture: ComponentFixture<PastexamsubcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastexamsubcategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastexamsubcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
