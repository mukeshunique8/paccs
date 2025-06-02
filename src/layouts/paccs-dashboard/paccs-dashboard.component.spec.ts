import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaccsDashboardComponent } from './paccs-dashboard.component';

describe('PaccsDashboardComponent', () => {
  let component: PaccsDashboardComponent;
  let fixture: ComponentFixture<PaccsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaccsDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaccsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
