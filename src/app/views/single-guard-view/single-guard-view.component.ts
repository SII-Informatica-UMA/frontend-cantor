import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'single-guard-view',
  templateUrl: './single-guard-view.component.html',
  styleUrls: ['./single-guard-view.component.css']
})
export class SingleGuardViewComponent {
  idValue:string = 'Vacio';
  vigilante:any = {};
  accessToken:any;

  constructor(private route: ActivatedRoute, private http: HttpClient,public router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idValue = params['idVigilante'];
    });

    this.accessToken = localStorage.getItem('accessToken');

    // Obtener los datos del vigilante
    this.getVigilante(this.idValue);
  }

  getVigilante(idValue: string): void {
    // Verificar si hay un token de acceso disponible
    if (this.accessToken) {
      // Establecer las cabeceras con el token de acceso
      const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.accessToken);

      // Realizar la solicitud GET a la API para obtener los datos del vigilante
      this.http.get<any>(`http://localhost:8081/vigilantes/${idValue}`, { headers }).subscribe(
        vigilante => {
          this.vigilante = vigilante;
          console.log('Datos del vigilante:', vigilante);
        },
        error => {
          console.error('Error al obtener los datos del vigilante:', error);
        }
      );
    } else {
      console.warn('No se encontró un token de acceso en el localStorage');
    }
  }

}
