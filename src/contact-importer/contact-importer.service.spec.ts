import { Test, TestingModule } from '@nestjs/testing';
import { ContactImporterService } from './contact-importer.service';

describe('ContactImporterService', () => {
  let service: ContactImporterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactImporterService],
    }).compile();

    service = module.get<ContactImporterService>(ContactImporterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
