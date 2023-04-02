import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginData } from '../models/user/user-login.dto';
import { UserService } from './user.service';
import { User } from '../models/user/user.model';
import { UserAuthDto } from '../models/user/user-auth.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private userService: UserService) {}
  user!: User;
  authUser!: UserAuthDto;

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  setPassport(passport: UserAuthDto): void {
    localStorage.setItem('passport', JSON.stringify(passport));
  }

  getPassport(): UserAuthDto | null {
    const passportString = localStorage.getItem('passport');

    if (passportString) {
      return JSON.parse(passportString as string);
    }

    return null;
  }

  isLoggedIn(): boolean {
    const haveToken = !!this.getToken;
    const havePassport = !!this.getPassport;

    if (haveToken && havePassport) {
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    if (this.getToken !== null) localStorage.removeItem('token');
    if (this.getPassport !== null) localStorage.removeItem('passport');
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

  login(data: UserLoginData): boolean {
    const { email } = data;
    this.userService.getUserByEmail(email).subscribe((users) => {
      const passport = new UserAuthDto(users[0]);
      this.setToken('absdaeuhoíun-8y-7y4103t681b');
      this.setPassport(passport);
    });

    return this.isLoggedIn();
  }
}
