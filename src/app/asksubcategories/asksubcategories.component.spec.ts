import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsksubcategoriesComponent } from './asksubcategories.component';

describe('AsksubcategoriesComponent', () => {
  let component: AsksubcategoriesComponent;
  let fixture: ComponentFixture<AsksubcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsksubcategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsksubcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
