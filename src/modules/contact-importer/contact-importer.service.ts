import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactImporterService {
  getContacts(): string {
    return 'getting contacts';
  }

  addContacts(): string {
    return 'adding contacts';
  }

  updateContacts(): string {
    return 'updating contacts';
  }

  deleteContacts(): string {
    return 'deleting contacts';
  }
}
