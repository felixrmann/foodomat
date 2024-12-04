import { Module } from '@nestjs/common';
import { IngredientModule } from './ingredient/ingredient.module';
import { DatabaseModule } from './database/database.module';
import { LoggerModule } from './logger/logger.module';
import { RecipeModule } from './recipe/recipe.module';
import { PlanModule } from './plan/plan.module';

@Module({
  imports: [
    DatabaseModule,
    LoggerModule,
    IngredientModule,
    RecipeModule,
    PlanModule,
  ],
})
export class AppModule {}
