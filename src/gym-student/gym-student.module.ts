import { Module } from '@nestjs/common';
import { GymStudentService } from './gym-student.service';
import { GymStudentController } from './gym-student.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { GymStudentRepository } from './repositories/gym-student.repository';

@Module({
  controllers: [GymStudentController],
  providers: [GymStudentService, PrismaService, GymStudentRepository],
})
export class GymStudentModule {}
