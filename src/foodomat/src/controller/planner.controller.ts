import { Controller, Get } from '@nestjs/common';
import { PlannerService } from '../service/planner.service';
import { Month, PlanableDto, PlanableMonthDto } from '../../../shared/contract';

@Controller()
export class PlannerController {
  constructor(
    private readonly plannerService: PlannerService
  ) {}

  @Get()
  getPlanble(date: Date): PlanableDto {
    return {
      id: new Date().getMilliseconds(),
      date: date,
      recipe: null
    }
  }

  @Get()
  getMonth(month: Month): PlanableMonthDto {
    return {
      id: new Date().getMilliseconds(),
      month: month,
      year: new Date().getFullYear(),
      planables: []
    }
  }

}
