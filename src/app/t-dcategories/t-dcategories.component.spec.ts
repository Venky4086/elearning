import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TDcategoriesComponent } from './t-dcategories.component';

describe('TDcategoriesComponent', () => {
  let component: TDcategoriesComponent;
  let fixture: ComponentFixture<TDcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TDcategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TDcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
