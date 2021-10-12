import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuecategoriesComponent } from './valuecategories.component';

describe('ValuecategoriesComponent', () => {
  let component: ValuecategoriesComponent;
  let fixture: ComponentFixture<ValuecategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuecategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuecategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
