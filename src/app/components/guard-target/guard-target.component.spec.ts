import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardTargetComponent } from './guard-target.component';

describe('GuardTargetComponent', () => {
  let component: GuardTargetComponent;
  let fixture: ComponentFixture<GuardTargetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuardTargetComponent]
    });
    fixture = TestBed.createComponent(GuardTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
