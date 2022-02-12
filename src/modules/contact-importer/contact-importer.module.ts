import { Module } from '@nestjs/common';
import { ContactImporterController } from './contact-importer.controller';
import { ContactImporterService } from './contact-importer.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [ContactImporterController],
  providers: [ContactImporterService],
})
export class ContactImporterModule {}
