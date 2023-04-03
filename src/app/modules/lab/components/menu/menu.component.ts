import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor(private readonly toastr: ToastrService) {}

  onHelpClick() {
    this.toastr.warning(`Recurso ainda não implementado.`);
    this.toastr.warning(`A página "ajuda" está ainda em construção.`);
  }

  onSendFeedbackClick() {
    this.toastr.warning(`Recurso ainda não implementado.`);
    this.toastr.warning(`A página "ajuda" está ainda em construção.`);
  }
}
