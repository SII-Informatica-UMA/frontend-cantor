import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [HeaderComponent]
      }).compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
      expect(component.user).toBe(false);
      expect(component.headquarter).toBe(false);
      expect(component.accessToken).toBeNull();
      expect(component.windowWidth).toBe(window.innerWidth);
  });

  it('should update the windowWidth on window resize', () => {
      const newWidth = 800;
      spyOnProperty(window, 'innerWidth', 'get').and.returnValue(newWidth);

      window.dispatchEvent(new Event('resize'));
      fixture.detectChanges();

      expect(component.windowWidth).toBe(newWidth);
  });

  it('should call cerrarSesion and navigate to home on cerrarSesion', () => {
      spyOn(localStorage, 'removeItem');
      const routerSpy = spyOn(component.router, 'navigate');

      component.cerrarSesion();

      expect(localStorage.removeItem).toHaveBeenCalledWith('accessToken');
      expect(routerSpy).toHaveBeenCalledWith(['/']);
  });
});
