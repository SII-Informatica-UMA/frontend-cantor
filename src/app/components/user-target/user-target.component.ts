import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'user-target',
  templateUrl: './user-target.component.html',
  styleUrls: ['./user-target.component.css']
})
export class UserTargetComponent {
  @Input() id: string = "12345";
  @Input() firstName: string = "John";
  @Input() lastName: string = "Doe";
  @Input() email: string = "john.doe@example.com";
  @Input() roles: string[] = ["STUDENT", "HEADQUARTER"];
  @Input() delete:boolean = true;
  accessToken: any;

  constructor(public router: Router, private http: HttpClient){}
  
  /* getUserRoleClass(role: string): string {
    switch (role) {
      case 'STUDENT':
        return 'user-card-student';
      case 'CLASSROOM_GUARD':
        return 'user-card-classroom-guard';
      case 'CLASSROOM_MANAGER':
        return 'user-card-classroom-manager';
      case 'HEADQUARTER_MANAGER':
        return 'user-card-headquarter-manager';
      case 'CORRECTOR':
        return 'user-card-corrector';
      case 'VICE_RECTORATE':
        return 'user-card-vice-rectorate';
      default:
        return '';
    }
  } */

  getUserRole(role: string): string {
    switch (role) {
      case 'STUDENT':
        return 'Estudiante';
      case 'CLASSROOM_GUARD':
        return 'Vigilante';
      case 'CLASSROOM_MANAGER':
        return 'Responsable de aula';
      case 'HEADQUARTER_MANAGER':
        return 'Responsable de sede';
      case 'CORRECTOR':
        return 'Corrector';
      case 'VICE_RECTORATE':
        return 'Vicerrector';
      default:
        return '';
    }
  }

  eliminarUsuario(id: string, event:MouseEvent): void {
    event.stopPropagation(); // Detiene la propagación del evento
    // Obtener el token de acceso del localStorage
    this.accessToken = localStorage.getItem('accessToken');

    // Verificar si hay un token de acceso disponible
    if (this.accessToken) {
      // Establecer las cabeceras con el token de acceso
      const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.accessToken);

      // Realizar la solicitud DELETE a la API
      this.http.delete<any>(`http://localhost:8080/usuarios/${id}`, { headers }).subscribe(
        response => {
          console.log('Usuario eliminado:', response);
          location.reload()
          alert("Usuario eliminado correctamente.")
        },
        error => {
          console.error('Error al eliminar el usuario:', error);
          // Manejar el error según tus necesidades
        }
      );
    } else {
      console.warn('No se encontró un token de acceso en el localStorage');
    }
  }

}


