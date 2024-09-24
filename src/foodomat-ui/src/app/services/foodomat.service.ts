import { Injectable } from '@angular/core';
import { Month, Planable, PlanableMonth } from '../../../../shared/types/planner.types';
import { BehaviorSubject, map, Observable } from 'rxjs';
import {
  defaultFood,
  getAmountOfDaysInMonth, getCurrentMonth,
  getCurrentYear,
  getRandomId
} from './foodomat.utils';

@Injectable({
  providedIn: 'root',
})
export class FoodomatService {

  private allPlanables: BehaviorSubject<ReadonlyArray<Planable>> = new BehaviorSubject<ReadonlyArray<Planable>>([]);
  private _allPlanables: ReadonlyArray<Planable> = defaultFood;

  public planablesGroupedByMonth: Observable<PlanableMonth[]> = this.allPlanables.pipe(
    map((allPlanables: ReadonlyArray<Planable>): PlanableMonth[] => {
      const groupedPlanables: Map<Month, Planable[]> = new Map();
      allPlanables.forEach((planable: Planable) => {
        const alreadyInMonth: Planable[] = groupedPlanables.get(planable.date.getMonth()) ?? [];
        alreadyInMonth.push(planable);
        groupedPlanables.set(planable.date.getMonth(), alreadyInMonth);
      });

      const fullGroupedMonths: PlanableMonth[] = [];
      groupedPlanables.forEach((values: Planable[], month: Month) => {
        const yearToLook: number | undefined = values.at(0) ? values.at(0)?.date.getFullYear() : undefined;
        const daysInMonth: number = getAmountOfDaysInMonth(yearToLook, month);
        const filledMonths: Planable[] = [];

        for (let dayIndex = 1; dayIndex <= daysInMonth; dayIndex++) {
          const filledValue: Planable | undefined = values.find((planable: Planable) => planable.date.getDate() === dayIndex);
          if (filledValue && filledValue.date.getDate() === dayIndex) {
            filledMonths.push(filledValue);
          } else {
            filledMonths.push({
              id: getRandomId(),
              date: new Date(yearToLook ?? getCurrentYear(), month, dayIndex),
              recipe: null,
              active: false
            });
          }
        }

        fullGroupedMonths.push({
          month: month,
          year: yearToLook ?? getCurrentYear(),
          active: false,
          planables: filledMonths,
        });
      });
      return fullGroupedMonths;
    }),
  );

  public activeMonth: Observable<PlanableMonth> = this.planablesGroupedByMonth.pipe(
    map((groupedMonths: PlanableMonth[]): PlanableMonth => {
      let activeMonth: PlanableMonth | undefined = groupedMonths.find((month: PlanableMonth) => month.active);

      if (!activeMonth) {
        activeMonth = groupedMonths.find((month: PlanableMonth) => month.month === getCurrentMonth());

        if (!activeMonth) {
          activeMonth = {
            month: getCurrentMonth(),
            year: getCurrentYear(),
            planables: [],
            active: true,
          }
        }
      }
      return activeMonth;
    })
  )

  constructor() {
    this.renderChanges();
  }


  private renderChanges(): void {
    this.allPlanables.next(this._allPlanables);
    this._allPlanables = [];
  }

}
