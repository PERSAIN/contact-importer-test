import { Module } from '@nestjs/common';
import { dataBaseProviders } from './database.service';

@Module({
  imports: [...dataBaseProviders],
  exports: [...dataBaseProviders],
})
export class DatabaseModule {}
