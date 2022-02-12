import { Test, TestingModule } from '@nestjs/testing';
import { ContactImporterController } from './contact-importer.controller';

describe('ContactImporterController', () => {
  let controller: ContactImporterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactImporterController],
    }).compile();

    controller = module.get<ContactImporterController>(ContactImporterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
