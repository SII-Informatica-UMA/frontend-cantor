import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import users from 'users';

@Component({
  selector: 'app-edit-user-view',
  templateUrl: './edit-user-view.component.html',
  styleUrls: ['./edit-user-view.component.css']
})
export class EditUserViewComponent {
  idValue:string = 'Vacio';
  usuario:any = {roles: []};
  peticion: any;
  accessToken:any;
  
  constructor(private route: ActivatedRoute, private http: HttpClient, public router: Router) {}

  ngOnInit() {
    // Obtener el token de acceso del localStorage
    this.accessToken = localStorage.getItem('accessToken');

    this.route.params.subscribe(params => {
      this.idValue = params['idUser'];
    });

    console.log(this.idValue);
    

    // Obtener los datos del usuario
    this.getUsuario(this.idValue);
    this.peticion = this.usuario;
    
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

  toggleRole(role: string) {
    const index = this.peticion.roles.indexOf(role);
    if (index === -1) {
      this.peticion.roles.push(role);
    } else {
      this.peticion.roles.splice(index, 1);
    }
  }

  editarUsuario(idValue: string): void {
    // Verificar si hay un token de acceso disponible
    if (this.accessToken) {
      // Establecer las cabeceras con el token de acceso
      const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.accessToken);

      // Preparar el cuerpo de la solicitud con los datos a modificar
      const body = this.peticion;

      // Realizar la solicitud PUT a la API
      this.http.put<any>(`http://localhost:8080/usuarios/${idValue}`, body, { headers }).subscribe(
        response => {
          console.log('Usuario actualizado:', response);
          this.router.navigate(["/users"])
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
}
