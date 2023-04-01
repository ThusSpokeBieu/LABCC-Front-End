import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  loginForm!: FormGroup;
  hide: boolean = true;

  constructor() {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(8),
      ]),

      password: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(8),
      ]),
    });
  }

  onSubmit() {
    console.log(this.loginForm);

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    console.log(email);
    console.log(password);
  }
}
