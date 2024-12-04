import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PlanService } from './plan.service';
import { isDateString } from 'class-validator';
import { Prisma } from '@prisma/client';

@Controller('plan')
export class PlanController {
  constructor(private readonly planService: PlanService) {}

  @Get()
  public findAll(
    @Query('from_date') fromDate?: string,
    @Query('to_date') toDate?: string,
  ) {
    if (fromDate && !isDateString(fromDate)) {
      throw new HttpException(
        `fromDate: ${fromDate} is not a valid ISO8601 date.`,
        HttpStatus.BAD_REQUEST,
      );
    }
    if (toDate && !isDateString(toDate)) {
      throw new HttpException(
        `toDate: ${toDate} is not a valid ISO8601 date.`,
        HttpStatus.BAD_REQUEST,
      );
    }

    if (!fromDate && !toDate) {
      return this.planService.findAll();
    }
    if (fromDate && toDate) {
      return this.planService.findAllInDateRange(
        new Date(Date.parse(fromDate)),
        new Date(Date.parse(toDate)),
      );
    }
    throw new HttpException(
      `Either both from_date and to_date have to be set or neither.`,
      HttpStatus.BAD_REQUEST,
    );
  }

  @Get(':id')
  public findOne(@Param('id', ParseIntPipe) id: number) {
    return this.planService.findOne(id);
  }

  @Post()
  public create(@Body() plan: Prisma.PlanEntityCreateInput) {
    return this.planService.create(plan);
  }

  @Patch(':id')
  public update(
    @Param('id', ParseIntPipe) id: number,
    @Body() ingredient: Prisma.PlanEntityUpdateInput,
  ) {
    return this.planService.update(id, ingredient);
  }

  @Delete(':id')
  public delete(@Param('id', ParseIntPipe) id: number) {
    return this.planService.delete(id);
  }
}
