import { Module } from '@nestjs/common';
import { IngredientModule } from './ingredient/ingredient.module';
import { DatabaseModule } from './database/database.module';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [
    IngredientModule,
    DatabaseModule,
    LoggerModule,
  ],
})
export class AppModule {
}
