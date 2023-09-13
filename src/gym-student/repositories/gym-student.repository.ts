import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GymStudentEntity } from '../entities/gym-student.entity';
import { CreateGymStudentDto } from '../dto/create-gym-student.dto';
import { UpdateGymStudentDto } from '../dto/update-gym-student.dto';

@Injectable()
export class GymStudentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateGymStudentDto): Promise<GymStudentEntity> {
    return this.prisma.gymStudent.create({
      data: createUserDto,
    });
  }

  async findAll(): Promise<GymStudentEntity[]> {
    return this.prisma.gymStudent.findMany();
  }

  async findOne(id: number): Promise<GymStudentEntity> {
    return this.prisma.gymStudent.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(
    id: number,
    updateUserDto: UpdateGymStudentDto,
  ): Promise<GymStudentEntity> {
    return this.prisma.gymStudent.update({
      where: { id: id },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    return this.prisma.gymStudent.delete({
      where: { id: id },
    });
  }
}
