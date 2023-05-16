import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent {
  userId: string = '';

  constructor(private router: Router){}

  search() {
  if (this.userId.trim() !== '') {
      this.router.navigate(['/users', this.userId]);
  } else {
    alert('El campo de búsqueda está vacío. Por favor, ingrese un ID de usuario.');
  }
    
  }
}
