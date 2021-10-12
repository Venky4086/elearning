import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskcategoriesComponent } from './askcategories.component';

describe('AskcategoriesComponent', () => {
  let component: AskcategoriesComponent;
  let fixture: ComponentFixture<AskcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskcategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
