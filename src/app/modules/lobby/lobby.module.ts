import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LobbyRoutingModule } from './lobby-routing.module';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [SignUpComponent, SignInComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    LobbyRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    ToastrModule,
  ],
})
export class LobbyModule {}
