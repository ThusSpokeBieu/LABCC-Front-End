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

  onLogin() {}
}
