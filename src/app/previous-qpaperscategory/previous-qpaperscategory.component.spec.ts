import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousQpaperscategoryComponent } from './previous-qpaperscategory.component';

describe('PreviousQpaperscategoryComponent', () => {
  let component: PreviousQpaperscategoryComponent;
  let fixture: ComponentFixture<PreviousQpaperscategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousQpaperscategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousQpaperscategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
