import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGuardViewComponent } from './create-guard-view.component';

describe('CreateGuardViewComponent', () => {
  let component: CreateGuardViewComponent;
  let fixture: ComponentFixture<CreateGuardViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateGuardViewComponent]
    });
    fixture = TestBed.createComponent(CreateGuardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
