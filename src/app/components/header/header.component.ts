import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public router: Router){}

  @Input() user: boolean = false;
  @Input() headquarter: boolean = false;
  accessToken:any = localStorage.getItem('accessToken');

  cerrarSesion(){
    localStorage.removeItem('accessToken');
    this.router.navigate(['/'])
  }
}
