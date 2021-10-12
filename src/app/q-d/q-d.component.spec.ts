import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QDComponent } from './q-d.component';

describe('QDComponent', () => {
  let component: QDComponent;
  let fixture: ComponentFixture<QDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
