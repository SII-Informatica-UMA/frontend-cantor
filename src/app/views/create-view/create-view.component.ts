import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-create-view',
  templateUrl: './create-view.component.html',
  styleUrls: ['./create-view.component.css']
})
export class CreateViewComponent {
    peticion: any = {}
    contrasenasCoinciden: boolean = this.peticion.contrasena == this.peticion.repetirContrasena;
    crearUsuario(){
      this.contrasenasCoinciden
        if(this.contrasenasCoinciden){

        }
    }
}
