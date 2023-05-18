import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateViewComponent } from './create-view.component';

describe('CreateViewComponent', () => {
  let component: CreateViewComponent;
  let fixture: ComponentFixture<CreateViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateViewComponent]
    });
    fixture = TestBed.createComponent(CreateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate email format correctly', () => {
      const validEmail = 'test@example.com';
      const invalidEmail = 'testinvalid';

      expect(component.validarFormatoEmail(validEmail)).toBe(true);
      expect(component.validarFormatoEmail(invalidEmail)).toBe(false);
  });

});
