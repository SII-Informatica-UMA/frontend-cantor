import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../interfaces/User';
import { Role, rolesRepresentation } from '../../types/roles.types';

@Component({
  selector: 'app-edit-user-view',
  templateUrl: './edit-user-view.component.html',
  styleUrls: ['./edit-user-view.component.css']
})
export class EditUserViewComponent {
  protected readonly Role = Role;
  idValue: string = '';
  user: User = { firstName: '', lastName: '', email: '', roles: [] };
  accessToken: any;

  constructor(private route: ActivatedRoute, private http: HttpClient, public router: Router) {
  }

  ngOnInit() {
    // Obtener el token de acceso del localStorage
    this.accessToken = localStorage.getItem('accessToken');

    this.route.params.subscribe(params => {
      this.idValue = params['idUser'];
    });
    console.log(this.idValue);

    // Obtener los datos del usuario
    this.getUsuario(this.idValue);
  }

  getUsuario(idValue: string): void {
    // Verificar si hay un token de acceso disponible
    if (this.accessToken) {
      // Establecer las cabeceras con el token de acceso
      const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.accessToken);

      // Realizar la solicitud GET a la API para obtener los datos del usuario
      this.http.get<any>(`http://localhost:8080/usuarios/${idValue}`, { headers }).subscribe(
        usuario => {
          this.user = usuario;
          console.log('Datos del usuario:', usuario);
        },
        error => {
          console.error('Error al obtener los datos del usuario:', error);
        }
      );
    } else {
      console.warn('No se encontró un token de acceso en el localStorage');
    }
  }

  toggleRole(role: Role) {
    const index = this.user.roles.indexOf(role);
    if (index === -1) {
      this.user.roles.push(role);
    } else {
      this.user.roles.splice(index, 1);
    }
    console.log(this.user.roles);
  }

  editarUsuario(idValue: string): void {
    // Verificar si hay un token de acceso disponible
    if (this.accessToken) {
      // Establecer las cabeceras con el token de acceso
      const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.accessToken);

      // Preparar el cuerpo de la solicitud con los datos a modificar
      const body = this.user;

      // Realizar la solicitud PUT a la API
      this.http.put<any>(`http://localhost:8080/usuarios/${idValue}`, body, { headers }).subscribe(
        response => {
          console.log('Usuario actualizado:', response);
          this.accessToken = response.accessToken;
          localStorage.setItem('accessToken', response.accessToken)
          this.router.navigate(['/users'])
        },
        error => {
          console.error('Error al actualizar el usuario:', error);
          // Manejar el error según tus necesidades
        }
      );
    } else {
      console.warn('No se encontró un token de acceso en el localStorage');
    }
  }

  protected readonly rolesRepresentation = rolesRepresentation;
}
