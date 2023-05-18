import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginViewComponent } from './login-view.component';

describe('LoginViewComponent', () => {
  let component: LoginViewComponent;
  let fixture: ComponentFixture<LoginViewComponent>;

  beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [HttpClientTestingModule, RouterTestingModule],
        declarations: [LoginViewComponent]
      }).compileComponents();
    });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginViewComponent]
    });
    fixture = TestBed.createComponent(LoginViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login successfully', () => {
      const mockResponse = { accessToken: 'mock-access-token' };
      const httpSpy = spyOn(component.http, 'post').and.returnValue(of(mockResponse));
      const routerSpy = spyOn(component.router, 'navigate');

      component.email = 'test@example.com';
      component.password = 'password';
      component.login();

      expect(httpSpy).toHaveBeenCalled();
      expect(routerSpy).toHaveBeenCalledWith(['/home']);
      expect(localStorage.getItem('accessToken')).toBe(mockResponse.accessToken);
    });
});
