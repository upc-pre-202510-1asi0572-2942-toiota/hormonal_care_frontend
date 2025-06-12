import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('authToken'); // O puedes obtenerlo desde un servicio

    // Clonamos la solicitud para agregar los headers
    let modifiedRequest = req.clone({
      setHeaders: {
        'Content-Type': 'application/json', // Aseguramos que todas las solicitudes tengan este header
      }
    });

    if (token) {
      // Si tenemos el token, lo agregamos al header Authorization
      modifiedRequest = modifiedRequest.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(modifiedRequest);
  }
}
