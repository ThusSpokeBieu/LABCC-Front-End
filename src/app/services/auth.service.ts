import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginData } from '../models/user/user-login.dto';
import { UserService } from './user.service';
import { User } from '../models/user/user.model';
import { UserAuthDto } from '../models/user/user-auth.dto';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService
  ) {}
  user!: User;
  authUser!: UserAuthDto;
  correctCredentials!: boolean;

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
    this.loginExists();

    const haveToken = !!this.getToken();
    const havePassport = !!this.getPassport();

    console.log(haveToken);
    console.log(havePassport);
    if (haveToken && havePassport) {
      return true;
    } else {
      this.logout();
      return false;
    }
  }

  logout(): void {
    if (this.getToken() !== null) localStorage.removeItem('token');
    if (this.getPassport() !== null) localStorage.removeItem('passport');
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

  loginExists() {
    const passport = this.getPassport();

    if (!passport) {
      return this.logout();
    }

    this.userService.getUserByEmail(passport.email).subscribe((users) => {
      if (
        users[0].email !== passport.email ||
        users[0].id !== passport.id ||
        users[0].cnpj !== passport.cnpj ||
        users[0].company !== passport.company ||
        users[0].name !== passport.name
      ) {
        return this.logout();
      }
    });
  }

  login(data: UserLoginData) {
    const { email } = data;
    this.userService.getUserByEmail(email).subscribe((users) => {
      if (users[0].password === data.password) {
        const passport = new UserAuthDto(users[0]);
        this.setToken('absdaeuhoíun-8y-7y4103t681b');
        this.setPassport(passport);
        this.toastr.success(
          `Login realizado com sucesso, seja bem vindo novamente!`
        );
        this.router.navigate([`lab`]);
      } else {
        this.logout();
        this.toastr.error(`Email ou senha inválidos`);
      }
    });
  }
}
