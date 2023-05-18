import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersViewComponent } from './users-view.component';

describe('UsersViewComponent', () => {
  let component: UsersViewComponent;
  let fixture: ComponentFixture<UsersViewComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        declarations: [UsersViewComponent]
      }).compileComponents();
    });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersViewComponent]
    });
    fixture = TestBed.createComponent(UsersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should get users data on initialization', () => {
      // Simular respuesta exitosa del servicio de obtener usuarios
      const mockUsers = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Smith' }];
      spyOn(component.http, 'get').and.returnValue(of(mockUsers));

      component.ngOnInit();

      expect(component.usuarios).toEqual(mockUsers);
    });


  it('should handle error when getting users', () => {
      // Simular error al obtener usuarios
      const errorMessage = 'Error getting users';
      spyOn(component.http, 'get').and.returnValue(throwError(errorMessage));

      component.ngOnInit();

      expect(component.error).toBe(errorMessage);
    });
});
