import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private username: string = '';
  private password: string = '';

  constructor() {}

  setUserData(username: string, password: string): void {
    this.username = username;
    this.password = password;
  }

  getUsername(): string {
    return this.username;
  }

  getPassword(): string {
    return this.password;
  }

  clearData(): void {
    this.username = '';
    this.password = '';
  }
}
