import { Component, Input } from '@angular/core';
import { PlanableMonth } from '../../../../../shared/types/planner.types';

@Component({
  selector: 'foodomat-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrl: './plan-list.component.scss'
})
export class PlanListComponent {

  @Input()
  public activeMonth: PlanableMonth | null = null;

}
