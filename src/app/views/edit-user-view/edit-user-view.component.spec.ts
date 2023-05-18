import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserViewComponent } from './edit-user-view.component';

describe('EditUserViewComponent', () => {
  let component: EditUserViewComponent;
  let fixture: ComponentFixture<EditUserViewComponent>;

  beforeEach(async () => {
      mockActivatedRoute = {
        params: of({ idUser: '1' }) // Simular el parámetro idUser
      };

      mockRouter = {
        navigate: jasmine.createSpy('navigate') // Espiar el método navigate del Router
      };

      await TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        declarations: [EditUserViewComponent],
        providers: [
          { provide: ActivatedRoute, useValue: mockActivatedRoute },
          { provide: Router, useValue: mockRouter }
        ]
      }).compileComponents();
    });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditUserViewComponent]
    });
    fixture = TestBed.createComponent(EditUserViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get user data on initialization', () => {
      // Simular respuesta exitosa del servicio de obtener usuario
      const mockUser = { firstName: 'John', lastName: 'Doe', email: 'johndoe@example.com', roles: [] };
      spyOn(component.userService, 'getUserById').and.returnValue(of(mockUser));

      component.ngOnInit();

      expect(component.user).toEqual(mockUser);
  });

  it('should update user information', () => {
      // Simular respuesta exitosa del servicio de actualización de usuario
      const updatedUser = { firstName: 'Jane', lastName: 'Smith', email: 'janesmith@example.com', roles: [] };
      spyOn(component.userService, 'updateUser').and.returnValue(of(updatedUser));

      component.updateUser();

      expect(component.user).toEqual(updatedUser);
  });

  it('should navigate to users page after successful update', () => {
      // Simular respuesta exitosa del servicio de actualización de usuario con un accessToken
      const updatedUser = { firstName: 'Jane', lastName: 'Smith', email: 'janesmith@example.com', roles: [] };
      const mockAccessToken = 'mock-access-token';
      spyOn(component.userService, 'updateUser').and.returnValue(of({ user: updatedUser, accessToken: mockAccessToken }));

      component.updateUser();

      expect(mockRouter.navigate).toHaveBeenCalledWith(['/users']);
      expect(localStorage.getItem('accessToken')).toBe(mockAccessToken);
    });
});
