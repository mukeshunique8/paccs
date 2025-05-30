import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdpLoginComponent } from './idp-login.component';

describe('IdpLoginComponent', () => {
  let component: IdpLoginComponent;
  let fixture: ComponentFixture<IdpLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdpLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdpLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
