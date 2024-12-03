import { ConsoleLogger, Injectable } from '@nestjs/common';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { promises as fsPromises } from 'fs';

@Injectable()
export class LoggerService extends ConsoleLogger {

  async logToFile(entry: string) {
    const formattedEntry = `${Intl.DateTimeFormat('de-CH', {
      dateStyle: 'short', timeStyle: 'short', timeZone: 'CET'
    }).format(new Date())}\t${entry}\n`;

    try {
      if (!fs.existsSync(path.join(__dirname, '..', '..', 'logs'))) {
        await fsPromises.mkdir(path.join(__dirname, '..', '..', 'logs'));
      }
      await fsPromises.appendFile(path.join(__dirname, '..', '..', 'logs', 'foodomat.log'), formattedEntry);
    } catch (e) {
      if (e instanceof Error) console.log(e.message);
    }
  }

  override log(message: any, context?: string) {
    const entry = `${context}\t${message}`;
    this.logToFile(entry).then();
    super.log(message, context);
  }

  override error(message: any, stackOrContext?: string) {
    const entry = `${stackOrContext}\t${message}`;
    this.logToFile(entry).then();
    super.error(message, stackOrContext);
  }

}
