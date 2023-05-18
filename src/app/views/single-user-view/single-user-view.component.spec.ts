import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleUserViewComponent } from './single-user-view.component';

describe('SingleUserViewComponent', () => {
  let component: SingleUserViewComponent;
  let fixture: ComponentFixture<SingleUserViewComponent>;

  beforeEach(async () => {
      mockRouter = {
        navigate: jasmine.createSpy('navigate')
      };

      mockActivatedRoute = {
        params: of({ idUser: 'mock-id' })
      };

      await TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        declarations: [SingleUserViewComponent],
        providers: [
          { provide: Router, useValue: mockRouter },
          { provide: ActivatedRoute, useValue: mockActivatedRoute }
        ]
      }).compileComponents();
    });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleUserViewComponent]
    });
    fixture = TestBed.createComponent(SingleUserViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch user data on initialization', () => {
      const mockUser = { name: 'John Doe', role: 'STUDENT' };
      const mockHttp = TestBed.inject(HttpClientTestingModule);
      spyOn(mockHttp, 'get').and.returnValue(of(mockUser));

      component.ngOnInit();

      expect(component.usuario).toEqual(mockUser);
      expect(mockHttp.get).toHaveBeenCalledWith(
        `http://localhost:8080/usuarios/${component.idValue}`,
        jasmine.any(Object)
      );
    });

});
