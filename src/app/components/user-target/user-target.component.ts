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

  constructor(public router: Router){}
  
  getUserRoleClass(role: string): string {
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
  }

  getUserName(role: string): string {
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


