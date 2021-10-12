import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalpostersubcategoriesComponent } from './walpostersubcategories.component';

describe('WalpostersubcategoriesComponent', () => {
  let component: WalpostersubcategoriesComponent;
  let fixture: ComponentFixture<WalpostersubcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalpostersubcategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalpostersubcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
