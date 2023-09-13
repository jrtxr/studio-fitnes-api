import { PartialType } from '@nestjs/mapped-types';
import { CreateGymStudentDto } from './create-gym-student.dto';

export class UpdateGymStudentDto extends PartialType(CreateGymStudentDto) {}
