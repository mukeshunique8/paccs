import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdCreationComponent } from './id-creation.component';

describe('IdCreationComponent', () => {
  let component: IdCreationComponent;
  let fixture: ComponentFixture<IdCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdCreationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
