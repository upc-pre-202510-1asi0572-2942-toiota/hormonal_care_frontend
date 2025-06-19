import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authService.getToken();
    const authRequest = token
      ? request.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
      })
      : request;

    if (!token) {
      console.warn('No token found, redirecting to login.');
      this.authService.logout();
    }

    return next.handle(authRequest);
  }
}
