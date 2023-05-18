import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserTargetComponent } from './user-target.component';

describe('UserTargetComponent', () => {
  let component: UserTargetComponent;
  let fixture: ComponentFixture<UserTargetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [UserTargetComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserTargetComponent]
    });
    fixture = TestBed.createComponent(UserTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display user information correctly', () => {
      const idElement: HTMLElement = fixture.nativeElement.querySelector('.user-id');
      const firstNameElement: HTMLElement = fixture.nativeElement.querySelector('.user-first-name');
      const lastNameElement: HTMLElement = fixture.nativeElement.querySelector('.user-last-name');
      const emailElement: HTMLElement = fixture.nativeElement.querySelector('.user-email');
      const rolesElement: HTMLElement = fixture.nativeElement.querySelector('.user-roles');

      expect(idElement.textContent).toContain('12345');
      expect(firstNameElement.textContent).toContain('John');
      expect(lastNameElement.textContent).toContain('Doe');
      expect(emailElement.textContent).toContain('john.doe@example.com');
      expect(rolesElement.textContent).toContain('Estudiante');
      expect(rolesElement.textContent).toContain('Responsable de sede');
  });

});
