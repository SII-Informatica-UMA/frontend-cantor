import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-guards-view',
  templateUrl: './guards-view.component.html',
  styleUrls: ['./guards-view.component.css']
})
export class GuardsViewComponent {
  accessToken: any;
  vigilantes: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Obtener el token de acceso del localStorage
    this.accessToken = localStorage.getItem('accessToken');

    // Realizar la solicitud GET
    this.getVigilantes();
  }

  getVigilantes(): void {
    // Verificar si hay un token de acceso disponible
    if (this.accessToken) {
      // Establecer las cabeceras con el token de acceso
      const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.accessToken);

      // Realizar la solicitud GET a la API
      this.http.get<any[]>('http://localhost:8081/vigilantes', { headers }).subscribe(
        vigilantes => {
          this.vigilantes = vigilantes;
          console.log('vigilantes:', vigilantes);
        },
        error => {
          console.error('Error al obtener los vigilantes:', error);
        }
      );
    } else {
      console.warn('No se encontró un token de acceso en el localStorage');
    }
  }
}
