import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QbanksubcategoryComponent } from './qbanksubcategory.component';

describe('QbanksubcategoryComponent', () => {
  let component: QbanksubcategoryComponent;
  let fixture: ComponentFixture<QbanksubcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QbanksubcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QbanksubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
