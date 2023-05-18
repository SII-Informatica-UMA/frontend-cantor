import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Auth2Guard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      // Validar la validez del token de acceso aquí
      // Por ejemplo, puedes verificar la expiración del token o enviar una solicitud al servidor para validar el token
      // Si el token es válido, permitir el acceso a la ruta protegida
      return true;
    }

    // Si el token de acceso no está presente o no es válido, redirigir al usuario a la página de inicio de sesión
    this.router.navigate(['/home']);
    return false;
  }
}