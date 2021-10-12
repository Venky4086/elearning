import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiocategoriesComponent } from './audiocategories.component';

describe('AudiocategoriesComponent', () => {
  let component: AudiocategoriesComponent;
  let fixture: ComponentFixture<AudiocategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudiocategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiocategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
