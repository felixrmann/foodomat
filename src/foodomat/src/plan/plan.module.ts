import { Module } from '@nestjs/common';
import { PlanService } from './plan.service';
import { PlanController } from './plan.controller';
import { DatabaseService } from '../database/database.service';

@Module({
  controllers: [PlanController],
  providers: [PlanService, DatabaseService],
})
export class PlanModule {}
