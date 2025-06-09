import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdCreationHistoryComponent } from './id-creation-history.component';

describe('IdCreationHistoryComponent', () => {
  let component: IdCreationHistoryComponent;
  let fixture: ComponentFixture<IdCreationHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdCreationHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdCreationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
