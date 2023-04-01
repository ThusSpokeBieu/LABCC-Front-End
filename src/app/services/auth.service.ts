import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from '../models/login-data.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return this.getToken !== null;
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  /*
  login(data: LoginData): Observable<any> {

  }*/
}
