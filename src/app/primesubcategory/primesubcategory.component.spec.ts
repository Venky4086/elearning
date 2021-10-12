import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimesubcategoryComponent } from './primesubcategory.component';

describe('PrimesubcategoryComponent', () => {
  let component: PrimesubcategoryComponent;
  let fixture: ComponentFixture<PrimesubcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimesubcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimesubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
