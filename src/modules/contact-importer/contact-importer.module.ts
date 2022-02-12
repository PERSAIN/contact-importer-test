import { Module } from '@nestjs/common';
import { ContactImporterController } from './contact-importer.controller';
import { ContactImporterService } from './contact-importer.service';

@Module({
  controllers: [ContactImporterController],
  providers: [ContactImporterService],
})
export class ContactImporterModule {}
