import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-view',
  templateUrl: './create-guard-view.component.html',
  styleUrls: ['./create-guard-view.component.css']
})
export class CreateGuardViewComponent {
    peticion: any = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      DNI: '',
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

    crearVigilante(){
      console.log(this.peticion);
      
      if(this.peticion.firstName == '' || this.peticion.lastName == '' || this.peticion.email == '' || this.peticion.DNI == ''){
        alert("El único campo opcional es Número de Teléfono y/o Identificador de Sede, por favor complete el resto.")
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
          this.http.post<any>('http://localhost:8081/vigilantes', this.peticion, { headers }).subscribe(
            response => {
              console.log('Vigilante creado:', response);
              this.router.navigate(["/vigilantes"]);
            },
            error => {
              console.error('Error al crear el vigilante:', error);
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
