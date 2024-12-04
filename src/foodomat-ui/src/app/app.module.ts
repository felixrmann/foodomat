import { NgModule } from '@angular/core';
import { FoodomatMainComponent } from './components/foodomat-main/foodomat-main.component';
import { BrowserModule } from '@angular/platform-browser';
import { PlanItemComponent } from './components/plan-item/plan-item.component';
import { PlanListComponent } from './components/plan-list/plan-list.component';
import { FoodomatService } from './services/foodomat.service';
import { FoodomatNavComponent } from './components/foodomat-nav/foodomat-nav.component';
import { FoodomatAdminComponent } from './components/foodomat-admin/foodomat-admin.component';
import { provideRouter, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';

const declarations = [
  FoodomatMainComponent,
  FoodomatNavComponent,
  FoodomatAdminComponent,
  PlanListComponent,
  PlanItemComponent,
];

@NgModule({
  declarations: [declarations],
  providers: [provideRouter(routes), FoodomatService],
  imports: [BrowserModule, RouterOutlet],
  bootstrap: [FoodomatMainComponent],
})
export class AppModule {
}
