import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabRoutingModule } from './lab-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { CollectionComponent } from './components/collection/collection.component';
import { ModelsComponent } from './components/models/models.component';
import { MaterialModule } from '../material/material.module';
import { DashboardCardsComponent } from './components/dashboard-cards/dashboard-cards.component';
import { DashboardBudgetsComponent } from './components/dashboard-budgets/dashboard-budgets.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    DashboardComponent,
    HomeComponent,
    CollectionComponent,
    ModelsComponent,
    DashboardCardsComponent,
    DashboardBudgetsComponent,
  ],
  imports: [CommonModule, LabRoutingModule, MaterialModule],
})
export class LabModule {}
