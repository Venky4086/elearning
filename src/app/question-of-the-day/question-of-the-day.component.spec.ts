import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionOfTheDayComponent } from './question-of-the-day.component';

describe('QuestionOfTheDayComponent', () => {
  let component: QuestionOfTheDayComponent;
  let fixture: ComponentFixture<QuestionOfTheDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionOfTheDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
