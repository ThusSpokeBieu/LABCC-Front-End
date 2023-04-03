import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CollectionComponent } from './components/collection/collection.component';
import { ModelsComponent } from './components/models/models.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CollectionListComponent } from './components/collection-list/collection-list.component';
import { CollectionRegisterComponent } from './components/collection-register/collection-register.component';
import { CollectionEditComponent } from './components/collection-edit/collection-edit.component';
import { ModelsListComponent } from './components/models-list/models-list.component';
import { ModelsEditComponent } from './components/models-edit/models-edit.component';
import { ModelsRegisterComponent } from './components/models-register/models-register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },

      {
        path: 'collections',
        component: CollectionComponent,
        children: [
          {
            path: '',
            component: CollectionListComponent,
          },
          {
            path: 'new',
            component: CollectionRegisterComponent,
          },
          {
            path: 'edit/:id',
            component: CollectionEditComponent,
          },
          {
            path: '**',
            redirectTo: '',
            pathMatch: 'full',
          },
        ],
      },

      {
        path: 'models',
        component: ModelsComponent,
        children: [
          { path: '', component: ModelsListComponent },
          { path: 'edit/:id', component: ModelsEditComponent },
          { path: 'new', component: ModelsRegisterComponent },
          { path: '**', redirectTo: '', pathMatch: 'full' },
        ],
      },
      { path: '**', redirectTo: '/lab/dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabRoutingModule {}
