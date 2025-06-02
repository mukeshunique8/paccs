import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PFooterComponent } from './p-footer.component';

describe('PFooterComponent', () => {
  let component: PFooterComponent;
  let fixture: ComponentFixture<PFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
