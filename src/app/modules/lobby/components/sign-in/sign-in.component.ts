import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  loginForm!: FormGroup;
  isLoggedIn: boolean = false;
  hide: boolean = true;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly toastr: ToastrService
  ) {
    console.log(this.authService.isLoggedIn());
    console.log(this.authService.getPassport());
    console.log(this.authService.getToken());
    /*    this.authService.logout();

    if (this.authService.isLoggedIn()) {
      this.router.navigate(['lab']);
    }*/
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.minLength(8),
        ])
      ),

      password: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(8)])
      ),
    });
  }

  onSubmit() {
    const loginData = this.loginForm;

    const { email, password } = loginData.value;

    if (email.length < 8) {
      this.toastr.error(`O email deve conter mais que 8 caracteres.`);
    }

    if (password.length < 8) {
      this.toastr.error(`A senha deve conter mais que 8 caracteres.`);
    }

    if (loginData.valid) {
      this.isLoggedIn = this.authService.login(loginData.value);
      console.log(this.isLoggedIn);
      console.log(this.authService.getPassport());
      this.toastr.success(`Entrou com sucesso! Seja bem-vindo novamente.`);
      this.router.navigate([`lab`]);
    } else {
      this.toastr.error(`E-mail ou senha inválidos.`);
    }
  }
}
