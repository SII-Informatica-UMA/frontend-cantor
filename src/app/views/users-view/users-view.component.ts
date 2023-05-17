import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css']
})

export class UsersViewComponent {
  accessToken: any;
  usuarios: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Obtener el token de acceso del localStorage
    this.accessToken = localStorage.getItem('accessToken');

    // Realizar la solicitud GET
    this.getUsuarios();
  }

  getUsuarios(): void {
    // Verificar si hay un token de acceso disponible
    if (this.accessToken) {
      // Establecer las cabeceras con el token de acceso
      const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.accessToken);

      // Realizar la solicitud GET a la API
      this.http.get<any[]>('http://localhost:8080/usuarios', { headers }).subscribe(
        usuarios => {
          this.usuarios = usuarios;
          console.log('Usuarios:', usuarios);
        },
        error => {
          console.error('Error al obtener los usuarios:', error);
        }
      );
    } else {
      console.warn('No se encontró un token de acceso en el localStorage');
    }
  }
}
