import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyKuralComponent } from './daily-kural.component';

describe('DailyKuralComponent', () => {
  let component: DailyKuralComponent;
  let fixture: ComponentFixture<DailyKuralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyKuralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyKuralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
