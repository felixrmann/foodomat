import { HttpException, Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class IngredientService {
  constructor(private readonly databaseService: DatabaseService) {}

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
        `Cannot get ingredient with id: ${id} because it doesn't exist.`,
        422,
      );
    }
    return result;
  }

  public async create(createIngredient: Prisma.IngredientEntityCreateInput) {
    try {
      return await this.databaseService.ingredientEntity.create({
        data: createIngredient,
      });
    } catch (e) {
      throw new HttpException(
        `Cannot create ingredient because ingredient with name: ${createIngredient.name} already exists.`,
        422,
      );
    }
  }

  public async update(
    id: number,
    updateIngredient: Prisma.IngredientEntityUpdateInput,
  ) {
    try {
      return await this.databaseService.ingredientEntity.update({
        where: {
          id: id,
        },
        data: updateIngredient,
      });
    } catch (e) {
      throw new HttpException(
        `Cannot update ingredient with id: ${id} because it doesn\'t exist.`,
        422,
      );
    }
  }

  public async delete(id: number) {
    try {
      return await this.databaseService.ingredientEntity.delete({
        where: {
          id: id,
        },
      });
    } catch (e) {
      throw new HttpException(
        `Cannot delete ingredient with id: ${id} because it doesn't exist.`,
        422,
      );
    }
  }
}
