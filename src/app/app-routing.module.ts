import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './security/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/lobby/lobby.module').then((m) => m.LobbyModule),
  },
  {
    path: 'lab',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/lab/lab.module').then((m) => m.LabModule),
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
