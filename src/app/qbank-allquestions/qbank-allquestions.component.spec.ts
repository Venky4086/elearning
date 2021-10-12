import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QbankAllquestionsComponent } from './qbank-allquestions.component';

describe('QbankAllquestionsComponent', () => {
  let component: QbankAllquestionsComponent;
  let fixture: ComponentFixture<QbankAllquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QbankAllquestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QbankAllquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
