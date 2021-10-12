import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousQpaperssubcategoryComponent } from './previous-qpaperssubcategory.component';

describe('PreviousQpaperssubcategoryComponent', () => {
  let component: PreviousQpaperssubcategoryComponent;
  let fixture: ComponentFixture<PreviousQpaperssubcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousQpaperssubcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousQpaperssubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
