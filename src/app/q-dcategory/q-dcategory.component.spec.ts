import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QDcategoryComponent } from './q-dcategory.component';

describe('QDcategoryComponent', () => {
  let component: QDcategoryComponent;
  let fixture: ComponentFixture<QDcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QDcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QDcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
