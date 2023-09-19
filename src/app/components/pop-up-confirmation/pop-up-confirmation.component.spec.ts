import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpConfirmationComponent } from './pop-up-confirmation.component';

describe('PopUpConfirmationComponent', () => {
  let component: PopUpConfirmationComponent;
  let fixture: ComponentFixture<PopUpConfirmationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PopUpConfirmationComponent]
    });
    fixture = TestBed.createComponent(PopUpConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
