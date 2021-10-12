import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveclasscategoryComponent } from './liveclasscategory.component';

describe('LiveclasscategoryComponent', () => {
  let component: LiveclasscategoryComponent;
  let fixture: ComponentFixture<LiveclasscategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveclasscategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveclasscategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
