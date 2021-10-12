import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallposterComponent } from './wallposter.component';

describe('WallposterComponent', () => {
  let component: WallposterComponent;
  let fixture: ComponentFixture<WallposterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WallposterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WallposterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
