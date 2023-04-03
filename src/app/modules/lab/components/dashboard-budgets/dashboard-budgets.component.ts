import { Component, Input } from '@angular/core';
import { Collection } from 'src/app/models/collection/collection.model';

@Component({
  selector: 'app-dashboard-budgets',
  templateUrl: './dashboard-budgets.component.html',
  styleUrls: ['./dashboard-budgets.component.scss'],
})
export class DashboardBudgetsComponent {
  @Input() budgets: Collection[] = [];
  columnsDisplay: string[] = ['collection', 'responsible', 'models', 'budget'];
}
