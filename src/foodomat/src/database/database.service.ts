import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
    //console.info(`Connected to database: ${ process.env.DATABASE_NAME }, schema ${ process.env.DATABASE_SCHEMA }`);
  }
}
