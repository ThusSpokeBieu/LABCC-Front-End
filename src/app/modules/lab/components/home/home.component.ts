import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
    console.log(this.authService.isLoggedIn());
    console.log(this.authService.getPassport());
    console.log(this.authService.getToken());
    /*
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['login']);
    }*/
  }
}
