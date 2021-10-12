import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagbankcategoryComponent } from './imagbankcategory.component';

describe('ImagbankcategoryComponent', () => {
  let component: ImagbankcategoryComponent;
  let fixture: ComponentFixture<ImagbankcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagbankcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagbankcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
