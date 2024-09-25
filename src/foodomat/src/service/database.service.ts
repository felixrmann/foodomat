import { Recipe } from '../../../shared/types/recipe.types';
import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import * as process from 'node:process';

@Injectable()
export class DatabaseService {

  private database: PrismaClient;

  constructor() {
    this.database = new PrismaClient();
  }

  public async initDatabase(): Promise<void> {
    await this.database.$connect();
    console.log(`Connected to database: ${ process.env.DATABASE_URL }`);
  }

  public addRecipe(recipe: Recipe): boolean {
    return false;
  }

}
