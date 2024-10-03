import { Injectable } from '@nestjs/common';
import { Month, PlanableMonthDto } from '../../../shared/contract';

@Injectable()
export class PlannerService {

  public getPlanedMonth(month: Month): PlanableMonthDto {
    return {
      id: 1234,
      month: month,
      year: new Date().getFullYear(),
      planables: []
    }
  }

}
