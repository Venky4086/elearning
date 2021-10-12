import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimecategoryComponent } from './primecategory.component';

describe('PrimecategoryComponent', () => {
  let component: PrimecategoryComponent;
  let fixture: ComponentFixture<PrimecategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimecategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
