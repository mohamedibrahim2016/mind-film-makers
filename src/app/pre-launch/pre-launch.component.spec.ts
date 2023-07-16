import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreLaunchComponent } from './pre-launch.component';

describe('PreLaunchComponent', () => {
  let component: PreLaunchComponent;
  let fixture: ComponentFixture<PreLaunchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreLaunchComponent]
    });
    fixture = TestBed.createComponent(PreLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
