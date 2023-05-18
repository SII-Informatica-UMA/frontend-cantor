import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() user: boolean = false;
  @Input() vigilante: boolean = false;
  @Input() headquarter: boolean = false;
  accessToken:any = localStorage.getItem('accessToken');
  windowWidth: number = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.getWindowWidth();
  }

  getWindowWidth() {
    this.windowWidth = window.innerWidth;
  }
  
  constructor(public router: Router){
    this.getWindowWidth();

  }
  cerrarSesion(){
    localStorage.removeItem('accessToken');
    this.router.navigate(['/'])
  }
}
