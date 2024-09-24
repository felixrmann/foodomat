import { Injectable } from '@nestjs/common';
import { Month, PlanableMonth } from '../../../shared/types/planner.types';

@Injectable()
export class PlannerService {

  public getPlanedMonth(month: Month): PlanableMonth {
    return {
      id: 1234,
      month: month,
      year: new Date().getFullYear(),
      planables: [],
      active: true
    }
  }

}
