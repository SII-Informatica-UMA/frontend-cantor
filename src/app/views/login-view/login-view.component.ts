import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, of, throwError } from 'rxjs';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent {
  email: string = '';
  password: string = '';
  isLoading: boolean = false;

  constructor(private http: HttpClient, public router: Router) {}

  login() {
    const url = 'http://localhost:8080/usuarios/login';

    const peticion = {
      email: this.email,
      password: this.password
    };

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    this.http.post<any>(url, peticion, { headers }).pipe(
      catchError(error => {
        console.error('Error:', error);
        return of(null);
      })
    ).subscribe(
      response => {
        if (response) {
          localStorage.setItem('accessToken', response.accessToken);
          console.log('Respuesta:', response);
          this.router.navigate(["/home"])
          
        }else{
          alert("Email y/o contraseña incorrecta. Por favor inténtelo de nuevo.")
          this.isLoading = false;
        }

      }
    );
  }
}
