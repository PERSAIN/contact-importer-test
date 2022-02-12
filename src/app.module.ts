import { Module } from '@nestjs/common';
import { ContactImporterModule } from './contact-importer/contact-importer.module';

@Module({
  imports: [ContactImporterModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
