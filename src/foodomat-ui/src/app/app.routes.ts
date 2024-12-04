import { Routes } from '@angular/router';
import { FoodomatAdminComponent } from './components/foodomat-admin/foodomat-admin.component';
import { PlanListComponent } from './components/plan-list/plan-list.component';

export const routes: Routes = [
  { path: 'admin', component: FoodomatAdminComponent },
  { path: '', component: PlanListComponent },
];
