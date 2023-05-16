import { Component, Input } from '@angular/core';
import users from 'users';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css']
})

export class UsersViewComponent {
    @Input() usuarios: any[] = users;
    
    ngOnInit(){
      console.log(this.usuarios.length)
    }
}
