import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PlanService {
  constructor(private readonly databaseService: DatabaseService) {}

  public async findAll() {
    return this.databaseService.planEntity.findMany({
      include: {
        recipe: true,
      },
    });
  }

  public async findAllInDateRange(fromDate: Date, toDate: Date) {
    return this.databaseService.planEntity.findMany({
      where: {
        date: {
          gte: fromDate,
          lte: toDate,
        },
      },
      include: {
        recipe: true,
      },
    });
  }

  public async findOne(id: number) {
    const result = await this.databaseService.planEntity.findUnique({
      where: {
        id: id,
      },
      include: {
        recipe: true,
      },
    });
    if (result == null) {
      throw new HttpException(
        `Cannot get plan with id: ${id} because it doesn't exist.`,
        422,
      );
    }
    return result;
  }

  public async create(createPlan: Prisma.PlanEntityCreateInput) {
    try {
      return await this.databaseService.planEntity.create({
        data: createPlan,
      });
    } catch (e) {
      console.log(e);
      throw new HttpException(
        `Some Error occurred.`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  public async update(id: number, updatePlan: Prisma.PlanEntityUpdateInput) {
    try {
      return await this.databaseService.planEntity.update({
        where: {
          id: id,
        },
        data: updatePlan,
      });
    } catch (e) {
      throw new HttpException(
        `Cannot update plan with id: ${id} because it doesn\'t exist.`,
        422,
      );
    }
  }

  public async delete(id: number) {
    try {
      return await this.databaseService.planEntity.delete({
        where: {
          id: id,
        },
      });
    } catch (e) {
      throw new HttpException(
        `Cannot delete plan with id: ${id} because it doesn't exist.`,
        422,
      );
    }
  }
}
