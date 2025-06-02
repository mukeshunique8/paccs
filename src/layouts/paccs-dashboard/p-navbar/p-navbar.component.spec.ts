import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PNavbarComponent } from './p-navbar.component';

describe('PNavbarComponent', () => {
  let component: PNavbarComponent;
  let fixture: ComponentFixture<PNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
