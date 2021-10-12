import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousQpapersComponent } from './previous-qpapers.component';

describe('PreviousQpapersComponent', () => {
  let component: PreviousQpapersComponent;
  let fixture: ComponentFixture<PreviousQpapersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousQpapersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousQpapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
