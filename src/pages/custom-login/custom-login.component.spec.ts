import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLoginComponent } from './custom-login.component';

describe('CustomLoginComponent', () => {
  let component: CustomLoginComponent;
  let fixture: ComponentFixture<CustomLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
