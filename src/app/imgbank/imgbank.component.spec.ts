import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgbankComponent } from './imgbank.component';

describe('ImgbankComponent', () => {
  let component: ImgbankComponent;
  let fixture: ComponentFixture<ImgbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgbankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
