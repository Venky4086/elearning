import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentDignoticsComponent } from './different-dignotics.component';

describe('DifferentDignoticsComponent', () => {
  let component: DifferentDignoticsComponent;
  let fixture: ComponentFixture<DifferentDignoticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DifferentDignoticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferentDignoticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
