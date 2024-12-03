import { Module } from '@nestjs/common';
import { IngredientController } from './ingredient.controller';
import { IngredientService } from './ingredient.service';
import { DatabaseService } from '../database/database.service';

@Module({
  controllers: [IngredientController],
  providers: [IngredientService, DatabaseService],
})
export class IngredientModule {}
