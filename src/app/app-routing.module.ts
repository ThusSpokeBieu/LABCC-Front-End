import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: SignInComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  {
    path: 'lab',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/lab/lab.module').then((m) => m.LabModule),
  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
