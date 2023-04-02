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
import { ModelsRegisterComponent } from './components/models-register/models-register.component';
import { ModelsEditComponent } from './components/models-edit/models-edit.component';
import { CollectionListComponent } from './components/collection-list/collection-list.component';
import { CollectionEditComponent } from './components/collection-edit/collection-edit.component';
import { CollectionRegisterComponent } from './components/collection-register/collection-register.component';
import { ModelsListComponent } from './components/models-list/models-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

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
    ModelsRegisterComponent,
    ModelsEditComponent,
    CollectionListComponent,
    CollectionEditComponent,
    CollectionRegisterComponent,
    ModelsListComponent,
  ],
  imports: [
    CommonModule,
    LabRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    ToastrModule,
  ],
})
export class LabModule {}
