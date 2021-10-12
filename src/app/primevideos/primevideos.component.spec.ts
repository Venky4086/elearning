import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimevideosComponent } from './primevideos.component';

describe('PrimevideosComponent', () => {
  let component: PrimevideosComponent;
  let fixture: ComponentFixture<PrimevideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimevideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimevideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
