import { Test, TestingModule } from '@nestjs/testing';
import { ReclamationController } from './reclamation.controller';
import { ReclamationService } from './reclamation.service';

describe('ReclamationController', () => {
  let controller: ReclamationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReclamationController],
      providers: [ReclamationService],
    }).compile();

    controller = module.get<ReclamationController>(ReclamationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
