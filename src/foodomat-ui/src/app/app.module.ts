import { NgModule } from '@angular/core';
import { FoodomatMainComponent } from './components/foodomat-main/foodomat-main.component';
import { BrowserModule } from '@angular/platform-browser';
import { PlanItemComponent } from './components/plan-item/plan-item.component';
import { PlanListComponent } from './components/plan-list/plan-list.component';
import { FoodomatService } from './services/foodomat.service';
import { FoodomatNavComponent } from './components/foodomat-nav/foodomat-nav.component';

const declarations = [
  FoodomatMainComponent,
  FoodomatNavComponent,
  PlanListComponent,
  PlanItemComponent,
]

@NgModule({
  declarations: [declarations],
  providers: [FoodomatService],
  imports: [BrowserModule],
  bootstrap: [FoodomatMainComponent]
})
export class AppModule {}
