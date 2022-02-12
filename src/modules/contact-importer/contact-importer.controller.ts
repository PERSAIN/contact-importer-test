import { Controller, Delete, Get, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ContactImporterService } from './contact-importer.service';

@Controller('contacts')
@UseGuards(AuthGuard())
export class ContactImporterController {
  constructor(private contactImporterService: ContactImporterService) {}

  @Get()
  getContacts(): string {
    return this.contactImporterService.getContacts();
  }

  @Post()
  addContacts(): string {
    return this.contactImporterService.addContacts();
  }

  @Put()
  updateContacts(): string {
    return this.contactImporterService.updateContacts();
  }

  @Delete()
  deleteContacts(): string {
    return this.contactImporterService.deleteContacts();
  }
}
