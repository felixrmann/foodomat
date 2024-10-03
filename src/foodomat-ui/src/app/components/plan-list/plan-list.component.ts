import { Component, Input } from '@angular/core';
import { PlanableMonth } from '../../types/planner.types';

@Component({
  selector: 'foodomat-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrl: './plan-list.component.scss'
})
export class PlanListComponent {

  @Input()
  public activeMonth: PlanableMonth | null = null;

}
