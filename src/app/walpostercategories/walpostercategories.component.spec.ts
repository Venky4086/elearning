import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalpostercategoriesComponent } from './walpostercategories.component';

describe('WalpostercategoriesComponent', () => {
  let component: WalpostercategoriesComponent;
  let fixture: ComponentFixture<WalpostercategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalpostercategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalpostercategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
