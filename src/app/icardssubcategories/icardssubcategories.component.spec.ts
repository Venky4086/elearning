import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcardssubcategoriesComponent } from './icardssubcategories.component';

describe('IcardssubcategoriesComponent', () => {
  let component: IcardssubcategoriesComponent;
  let fixture: ComponentFixture<IcardssubcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcardssubcategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcardssubcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
