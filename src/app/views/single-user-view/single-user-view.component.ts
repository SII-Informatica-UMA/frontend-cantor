import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-single-user-view',
  templateUrl: './single-user-view.component.html',
  styleUrls: ['./single-user-view.component.css']
})
export class SingleUserViewComponent {
  idValue:string = 'Vacio';
  usuario:any = {};
  accessToken:any;

  constructor(private route: ActivatedRoute, private http: HttpClient,public router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idValue = params['idUser'];
    });

    this.accessToken = localStorage.getItem('accessToken');

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
          this.usuario = usuario;
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

}
