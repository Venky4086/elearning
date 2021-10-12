import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QbankeditComponent } from './qbankedit.component';

describe('QbankeditComponent', () => {
  let component: QbankeditComponent;
  let fixture: ComponentFixture<QbankeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QbankeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QbankeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
