import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import * as process from 'node:process';
import { RecipeDto } from '../../../shared/contract';

@Injectable()
export class DatabaseService {

  private database: PrismaClient;

  constructor() {
    this.database = new PrismaClient();
  }

  public async initDatabase(): Promise<void> {
    await this.database.$connect();
    console.info(`Connected to database: ${ process.env.DATABASE_NAME }, schema ${ process.env.DATABASE_SCHEMA }`);
  }

  public addRecipe(recipe: RecipeDto): boolean {
    return false;
  }

}
