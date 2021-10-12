import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiosubcategoriesComponent } from './audiosubcategories.component';

describe('AudiosubcategoriesComponent', () => {
  let component: AudiosubcategoriesComponent;
  let fixture: ComponentFixture<AudiosubcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudiosubcategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiosubcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
