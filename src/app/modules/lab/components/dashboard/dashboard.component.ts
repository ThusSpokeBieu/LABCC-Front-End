import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionDashboardDto } from 'src/app/models/collection/collection-dashboard.dto';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  collections!: number;
  models!: number;
  averageBudget!: number;
  biggerBudgets: CollectionDashboardDto[] = [];
}
