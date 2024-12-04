import { Module } from '@nestjs/common';
import { RecipeController } from './recipe.controller';
import { RecipeService } from './recipe.service';
import { DatabaseService } from '../database/database.service';

@Module({
  controllers: [RecipeController],
  providers: [RecipeService, DatabaseService],
})
export class RecipeModule {}
