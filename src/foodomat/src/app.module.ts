import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseService } from './service/database.service';
import { PlannerService } from './service/planner.service';
import configuration from '../config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '../../.env',
      load: [configuration],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PlannerService, {
    provide: DatabaseService,
    useFactory: async () => {
      const service: DatabaseService = new DatabaseService();
      await service.initDatabase();
      return service;
    },
  }],
})
export class AppModule {
}
