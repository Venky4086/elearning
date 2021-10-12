import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveclasssubcategoryComponent } from './liveclasssubcategory.component';

describe('LiveclasssubcategoryComponent', () => {
  let component: LiveclasssubcategoryComponent;
  let fixture: ComponentFixture<LiveclasssubcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveclasssubcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveclasssubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
