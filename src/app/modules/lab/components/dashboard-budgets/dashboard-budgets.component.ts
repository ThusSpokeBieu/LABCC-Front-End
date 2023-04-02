import { Component, Input } from '@angular/core';
import { CollectionDashboardDto } from 'src/app/models/collection/collection-dashboard.dto';

@Component({
  selector: 'app-dashboard-budgets',
  templateUrl: './dashboard-budgets.component.html',
  styleUrls: ['./dashboard-budgets.component.scss'],
})
export class DashboardBudgetsComponent {
  @Input() budgets: CollectionDashboardDto[] = [];
  columnsDisplay: string[] = ['collection', 'responsible', 'models', 'budget'];
}
