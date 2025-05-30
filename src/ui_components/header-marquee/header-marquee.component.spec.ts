import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMarqueeComponent } from './header-marquee.component';

describe('HeaderMarqueeComponent', () => {
  let component: HeaderMarqueeComponent;
  let fixture: ComponentFixture<HeaderMarqueeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderMarqueeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderMarqueeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
