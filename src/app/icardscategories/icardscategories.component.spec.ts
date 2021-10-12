import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcardscategoriesComponent } from './icardscategories.component';

describe('IcardscategoriesComponent', () => {
  let component: IcardscategoriesComponent;
  let fixture: ComponentFixture<IcardscategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcardscategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcardscategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
