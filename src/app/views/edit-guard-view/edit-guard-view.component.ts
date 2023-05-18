import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vigilante } from '../../interfaces/User';
import { Role, rolesRepresentation } from '../../types/roles.types';

@Component({
  selector: 'edit-vigilante-view',
  templateUrl: './edit-guard-view.component.html',
  styleUrls: ['./edit-guard-view.component.css']
})
export class EditGuardViewComponent {
  protected readonly Role = Role;
  idValue: string = '';
  vigilante: Vigilante = { firstName: '', lastName: '', email: '', DNI: '', phoneNumber: '' };
  accessToken: any;

  constructor(private route: ActivatedRoute, private http: HttpClient, public router: Router) {
  }

  ngOnInit() {
    // Obtener el token de acceso del localStorage
    this.accessToken = localStorage.getItem('accessToken');

    this.route.params.subscribe(params => {
      this.idValue = params['idVigilante'];
    });
    console.log(this.idValue);

    // Obtener los datos del vigilante
    this.getVigilante(this.idValue);
  }

  getVigilante(idValue: string): void {
    // Verificar si hay un token de acceso disponible
    if (this.accessToken) {
      // Establecer las cabeceras con el token de acceso
      const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.accessToken);

      // Realizar la solicitud GET a la API para obtener los datos del vigilante
      this.http.get<any>(`http://localhost:8080/vigilantes/${idValue}`, { headers }).subscribe(
        vigilante => {
          this.vigilante = vigilante;
          console.log('Datos del vigilante:', vigilante);
        },
        error => {
          console.error('Error al obtener los datos del vigilante:', error);
        }
      );
    } else {
      console.warn('No se encontró un token de acceso en el localStorage');
    }
  }

  editarVigilante(idValue: string): void {
    // Verificar si hay un token de acceso disponible
    if (this.accessToken) {
      // Establecer las cabeceras con el token de acceso
      const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.accessToken);

      // Preparar el cuerpo de la solicitud con los datos a modificar
      const body = this.vigilante;

      // Realizar la solicitud PUT a la API
      this.http.put<any>(`http://localhost:8080/vigilantes/${idValue}`, body, { headers }).subscribe(
        response => {
          console.log('Vigilante actualizado:', response);
          console.log('AccessToken:', response.accessToken);
          
          if(response.accessToken){
            this.accessToken = response.accessToken;
            localStorage.setItem('accessToken', response.accessToken)
          }
          
          this.router.navigate(['/vigilantes'])
        },
        error => {
          console.error('Error al actualizar el vigilante:', error);
          // Manejar el error según tus necesidades
        }
      );
    } else {
      console.warn('No se encontró un token de acceso en el localStorage');
    }
  }

  protected readonly rolesRepresentation = rolesRepresentation;
}