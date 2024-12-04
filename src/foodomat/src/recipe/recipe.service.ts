import { HttpException, Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class RecipeService {
  constructor(private readonly databaseService: DatabaseService) {}

  public async findAll() {
    return this.databaseService.recipeEntity.findMany({
      include: {
        ingredients: {
          select: {
            amount: true,
            ingredient: true,
          },
        },
      },
    });
  }

  public async findOne(id: number) {
    const result = await this.databaseService.recipeEntity.findUnique({
      where: {
        id: id,
      },
      include: {
        ingredients: {
          select: {
            amount: true,
            ingredient: true,
          },
        },
      },
    });
    if (result == null) {
      throw new HttpException(
        `Cannot get recipe with id: ${id} because it doesn't exist.`,
        422,
      );
    }
    return result;
  }

  public async create(createRecipe: Prisma.RecipeEntityCreateInput) {
    try {
      return await this.databaseService.recipeEntity.create({
        data: createRecipe,
      });
    } catch (e) {
      console.log(e);
      throw new HttpException(
        `Cannot create recipe because ingredient with name: ${createRecipe.name} already exists.`,
        422,
      );
    }
  }

  public async update(
    id: number,
    updateRecipe: Prisma.RecipeEntityUpdateInput,
  ) {
    try {
      return await this.databaseService.recipeEntity.update({
        where: {
          id: id,
        },
        data: updateRecipe,
      });
    } catch (e) {
      throw new HttpException(
        `Cannot update recipe with id: ${id} because it doesn\'t exist.`,
        422,
      );
    }
  }

  public async delete(id: number) {
    try {
      return await this.databaseService.recipeEntity.delete({
        where: {
          id: id,
        },
      });
    } catch (e) {
      console.log(e);
      throw new HttpException(
        `Cannot delete recipe with id: ${id} because it doesn't exist.`,
        422,
      );
    }
  }
}
