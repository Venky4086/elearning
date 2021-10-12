import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastExamTopicsComponent } from './past-exam-topics.component';

describe('PastExamTopicsComponent', () => {
  let component: PastExamTopicsComponent;
  let fixture: ComponentFixture<PastExamTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastExamTopicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastExamTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
