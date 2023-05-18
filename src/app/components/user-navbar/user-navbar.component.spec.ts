import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router'
import { By } from '@angular/platform-browser';

import { UserNavbarComponent } from './user-navbar.component';

describe('UserNavbarComponent', () => {
  let component: UserNavbarComponent;
  let fixture: ComponentFixture<UserNavbarComponent>;

  beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [UserNavbarComponent],
        imports: [RouterTestingModule]
      }).compileComponents();
    });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserNavbarComponent]
    });
    fixture = TestBed.createComponent(UserNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display an alert when search is clicked with an empty userId', () => {
      const alertSpy = spyOn(window, 'alert');
      const searchButton = fixture.debugElement.query(By.css('.search-button'));
      searchButton.triggerEventHandler('click', null);
      fixture.detectChanges();

      expect(alertSpy).toHaveBeenCalledWith('El campo de búsqueda está vacío. Por favor, ingrese un ID de usuario.');
  });
});
