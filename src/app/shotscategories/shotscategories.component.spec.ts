import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShotscategoriesComponent } from './shotscategories.component';

describe('ShotscategoriesComponent', () => {
  let component: ShotscategoriesComponent;
  let fixture: ComponentFixture<ShotscategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShotscategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShotscategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
