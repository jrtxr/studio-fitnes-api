import { Injectable } from '@nestjs/common';
import { CreateGymStudentDto } from './dto/create-gym-student.dto';
import { UpdateGymStudentDto } from './dto/update-gym-student.dto';
import { GymStudentRepository } from './repositories/gym-student.repository';

@Injectable()
export class GymStudentService {
  constructor(private readonly repository: GymStudentRepository) {}
  create(createGymStudentDto: CreateGymStudentDto) {
    return this.repository.create(createGymStudentDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateGymStudentDto: UpdateGymStudentDto) {
    return this.repository.update(id, updateGymStudentDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
