import { Test, TestingModule } from '@nestjs/testing';
import { GymStudentController } from './gym-student.controller';
import { GymStudentService } from './gym-student.service';

describe('GymStudentController', () => {
  let controller: GymStudentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GymStudentController],
      providers: [GymStudentService],
    }).compile();

    controller = module.get<GymStudentController>(GymStudentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
