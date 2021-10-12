import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagbanksubcategoryComponent } from './imagbanksubcategory.component';

describe('ImagbanksubcategoryComponent', () => {
  let component: ImagbanksubcategoryComponent;
  let fixture: ComponentFixture<ImagbanksubcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagbanksubcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagbanksubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
