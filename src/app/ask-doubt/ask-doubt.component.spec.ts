import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskDoubtComponent } from './ask-doubt.component';

describe('AskDoubtComponent', () => {
  let component: AskDoubtComponent;
  let fixture: ComponentFixture<AskDoubtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskDoubtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskDoubtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
