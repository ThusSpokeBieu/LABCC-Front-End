import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserRegisterDto } from 'src/app/models/users/user-register.dto';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  signUpForm!: FormGroup;
  hidePassword: boolean = true;

  constructor(
    private readonly toastr: ToastrService,
    private readonly userService: UserService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.signUpForm = new FormGroup({
      name: new FormControl('', Validators.required),
      password: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16),
        ])
      ),
      confirmPassword: new FormControl('', Validators.required),
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.email,
        ])
      ),
      company: new FormControl('', Validators.required),
      cnpj: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(14),
          Validators.minLength(14),
        ])
      ),
    });
  }

  onSubmit() {
    const newUserForm = this.signUpForm;
    const { password, confirmPassword } = newUserForm.value;

    if (password !== confirmPassword) {
      this.toastr.error(`As senhas devem ser idênticas`);
    }

    if (newUserForm.valid) {
      const newUser = newUserForm.value;
      this.userService
        .registerNewUser(newUser as UserRegisterDto)
        .subscribe((res) => {
          this.toastr.success(
            `Usuário registrado com sucesso, você já pode acessar sua conta.`
          );
          this.router.navigate([`login`]);
        });
    } else {
      this.toastr.error('Por favor, insira os campos corretamente.');
    }
  }
}
