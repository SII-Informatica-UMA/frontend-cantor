import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-create-view',
  templateUrl: './create-view.component.html',
  styleUrls: ['./create-view.component.css']
})
export class CreateViewComponent {
    peticion: any = {
      nombre: '',
      apellido: '',
      correo: '',
      contrasena: '',
      repetirContrasena: '',
      roles: []
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
      if(this.peticion.contrasena != this.peticion.repetirContrasena){
        alert("Las contraseñas deben coincidir.")
      }else{
        alert(JSON.stringify(this.peticion));
      }
      
    }
}
