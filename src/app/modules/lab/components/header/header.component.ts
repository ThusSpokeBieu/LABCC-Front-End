import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
    private readonly toastr: ToastrService
  ) {}

  onProfileClick() {
    this.toastr.warning(`A tela "perfil" ainda está em criação.`);
    this.router.navigate(['lab']);
  }

  onSettingsClick() {
    this.toastr.warning(`A tela "configurações" ainda está em criação.`);
    this.router.navigate(['lab']);
  }

  onLoggoutClick() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
