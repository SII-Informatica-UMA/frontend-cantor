import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleGuardViewComponent } from './single-guard-view.component';

describe('SingleGuardViewComponent', () => {
  let component: SingleGuardViewComponent;
  let fixture: ComponentFixture<SingleGuardViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleGuardViewComponent]
    });
    fixture = TestBed.createComponent(SingleGuardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
