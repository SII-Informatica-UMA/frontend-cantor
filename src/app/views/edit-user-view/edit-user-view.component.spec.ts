import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

import { EditUserViewComponent } from './edit-user-view.component';
import { User } from '../../interfaces/User';

describe('EditUserViewComponent', () => {
  let component: EditUserViewComponent;
  let fixture: ComponentFixture<EditUserViewComponent>;
  let mockActivatedRoute: any;
  let mockRouter: any;
  let mockHttpClient: any;

  beforeEach(async () => {
    mockActivatedRoute = {
      params: of({ idUser: '123' })
    };

    mockRouter = {
      navigate: jasmine.createSpy('navigate')
    };

    mockHttpClient = {
      get: jasmine.createSpy('get'),
      put: jasmine.createSpy('put')
    };

    await TestBed.configureTestingModule({
      declarations: [EditUserViewComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouter },
        { provide: HttpClient, useValue: mockHttpClient }
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

  it('should get the user data on initialization', () => {
    const mockUser: User = { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', roles: [] };
    const mockResponse = { user: mockUser };
    const mockHeaders = new HttpHeaders().set('Authorization', 'Bearer mockToken');

    mockHttpClient.get.and.returnValue(of(mockResponse));

    component.ngOnInit();

    expect(component.idValue).toBe('123');
    expect(mockHttpClient.get).toHaveBeenCalledWith('http://localhost:8080/usuarios/123', { headers: mockHeaders });
    expect(component.user).toEqual(mockUser);
    expect(component.accessToken).toBe('mockToken');
  });

  it('should update the user data', () => {
    const mockResponse = { accessToken: 'newToken' };
    const mockHeaders = new HttpHeaders().set('Authorization', 'Bearer mockToken');

    component.accessToken = 'mockToken';
    component.user = { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', roles: [] };
    component.editarUsuario('123');

    expect(mockHttpClient.put).toHaveBeenCalledWith(
      'http://localhost:8080/usuarios/123',
      component.user,
      { headers: mockHeaders }
    );
    expect(component.accessToken).toBe('newToken');
    expect(localStorage.getItem('accessToken')).toBe('newToken');
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/users']);
  });

});
