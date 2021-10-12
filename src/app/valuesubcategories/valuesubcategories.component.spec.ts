import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuesubcategoriesComponent } from './valuesubcategories.component';

describe('ValuesubcategoriesComponent', () => {
  let component: ValuesubcategoriesComponent;
  let fixture: ComponentFixture<ValuesubcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuesubcategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuesubcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
