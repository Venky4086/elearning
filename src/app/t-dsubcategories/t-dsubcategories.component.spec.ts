import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TDsubcategoriesComponent } from './t-dsubcategories.component';

describe('TDsubcategoriesComponent', () => {
  let component: TDsubcategoriesComponent;
  let fixture: ComponentFixture<TDsubcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TDsubcategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TDsubcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
