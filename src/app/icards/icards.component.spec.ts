import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcardsComponent } from './icards.component';

describe('IcardsComponent', () => {
  let component: IcardsComponent;
  let fixture: ComponentFixture<IcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
