import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGuardViewComponent } from './edit-guard-view.component';

describe('EditGuardViewComponent', () => {
  let component: EditGuardViewComponent;
  let fixture: ComponentFixture<EditGuardViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditGuardViewComponent]
    });
    fixture = TestBed.createComponent(EditGuardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
