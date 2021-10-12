import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QbankcategoryComponent } from './qbankcategory.component';

describe('QbankcategoryComponent', () => {
  let component: QbankcategoryComponent;
  let fixture: ComponentFixture<QbankcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QbankcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QbankcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
