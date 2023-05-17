import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import users from 'users';

@Component({
  selector: 'app-single-user-view',
  templateUrl: './single-user-view.component.html',
  styleUrls: ['./single-user-view.component.css']
})
export class SingleUserViewComponent {
  idValue:string = 'Vacio';
  user:any = {};

  constructor(private route: ActivatedRoute, public router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idValue = params['idUser'];
      // Utilizar el valor de xValue en tu componente
    });

    this.user = users.find(obj => obj.id === this.idValue);
    if (this.user) {
      console.log('Objeto encontrado:', this.user);
    } else {
      console.log('Objeto no encontrado');
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
