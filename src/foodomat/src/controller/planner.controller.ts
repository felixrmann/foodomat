import { Controller, Get } from '@nestjs/common';
import { PlannerService } from '../service/planner.service';
import { Month, PlanableDto, PlanableMonthDto } from '../../../shared/contract';

@Controller('planner')
export class PlannerController {
  constructor(
    private readonly plannerService: PlannerService
  ) {}

  @Get('planable')
  getPlanable(date: Date): PlanableDto {
    return {
      id: new Date().getMilliseconds(),
      date: date,
      recipe: null
    }
  }

  @Get('month')
  getMonth(month: Month): PlanableMonthDto {
    return {
      id: new Date().getMilliseconds(),
      month: month,
      year: new Date().getFullYear(),
      planables: []
    }
  }

}
