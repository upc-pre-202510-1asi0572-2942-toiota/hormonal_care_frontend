import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isAuthenticated()) {
      const requiredRole = route.data['role'];
      const currentUser = this.authService.currentUserValue;

      if (requiredRole && currentUser?.role !== requiredRole) {
        this.router.navigate(['/access-denied']);
        return false;
      }

      return true;
    }

    // Si el usuario no está autenticado, redirigir siempre a login
    if (state.url !== '/login') {
      this.router.navigate(['/login']);
    }
    return false;
  }
}
