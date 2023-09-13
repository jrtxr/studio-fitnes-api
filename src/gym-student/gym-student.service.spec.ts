import { Test, TestingModule } from '@nestjs/testing';
import { GymStudentService } from './gym-student.service';

describe('GymStudentService', () => {
  let service: GymStudentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GymStudentService],
    }).compile();

    service = module.get<GymStudentService>(GymStudentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
