import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-view',
  templateUrl: './create-view.component.html',
  styleUrls: ['./create-view.component.css']
})
export class CreateViewComponent {
    peticion: any = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      repitePassword: ''
    }
    accessToken: any;
    
    constructor(private http: HttpClient, private router:Router) { }

    validarFormatoEmail(email: string): boolean {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
    
    toggleRole(role: string) {
      const index = this.peticion.roles.indexOf(role);
      if (index === -1) {
        this.peticion.roles.push(role);
      } else {
        this.peticion.roles.splice(index, 1);
      }
    }

    crearUsuario(){
      console.log(this.peticion);
      
      if(this.peticion.firstName == '' || this.peticion.lastName == '' || this.peticion.email == '' || this.peticion.password == '' || this.peticion.repitePassword == ''){
        alert("Ningun campo debe ser vacío.")
      }else if(this.peticion.password != this.peticion.repitePassword || this.peticion.password == ''){
        alert("Las contraseñas deben coincidir.")
      }else if(!this.validarFormatoEmail(this.peticion.email)){
        alert("Formato de correo no válido.")
      }else {
            // Obtener el token de acceso del localStorage
        this.accessToken = localStorage.getItem('accessToken');
        // Verificar si hay un token de acceso disponible
        if (this.accessToken) {
          // Establecer las cabeceras con el token de acceso
          const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.accessToken);

          // Realizar la solicitud POST a la API
          this.http.post<any>('http://localhost:8080/usuarios', this.peticion, { headers }).subscribe(
            response => {
              console.log('Usuario creado:', response);
              this.router.navigate(["/users"]);
            },
            error => {
              console.error('Error al crear el usuario:', error);
              if(error.status == 409){
                alert("Error 409: Este correo ya se encuentra en uso. Porfavor intente con otro.")
              }else if(error.status == 403){
                alert("Sus credenciales no permiten realizar esta acción. Por favor inicie sesión de nuevo.")
              }
              // Manejar el error según tus necesidades
            }
          );
        } else {
          console.warn('No se encontró un token de acceso en el localStorage');
        }
      }
        
      }
}
