import { Test, TestingModule } from '@nestjs/testing';
import { ReclamationService } from './reclamation.service';

describe('ReclamationService', () => {
  let service: ReclamationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReclamationService],
    }).compile();

    service = module.get<ReclamationService>(ReclamationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
