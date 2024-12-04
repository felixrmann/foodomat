import { HttpException, Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class IngredientService {
  constructor(private readonly databaseService: DatabaseService) {
  }

  public async findAll() {
    return this.databaseService.ingredientEntity.findMany();
  }

  public async findOne(id: number) {
    const result = await this.databaseService.ingredientEntity.findUnique({
      where: {
        id: id,
      },
    });
    if (result === null) {
      throw new HttpException(
        `Cannot get ingredient with id: ${ id } because it doesn't exist.`,
        422,
      );
    }
    return result;
  }

  public async create(createIngredient: Prisma.IngredientEntityCreateInput) {
    return this.databaseService.ingredientEntity.create({
      data: createIngredient,
    });
  }

  public async update(
    id: number,
    updateIngredient: Prisma.IngredientEntityUpdateInput,
  ) {
    return this.databaseService.ingredientEntity.update({
      where: {
        id: id,
      },
      data: updateIngredient,
    });
  }

  public async delete(id: number) {
    return this.databaseService.ingredientEntity.delete({
      where: {
        id: id,
      },
    });
  }
}
