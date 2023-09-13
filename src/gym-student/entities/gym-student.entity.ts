import { GymStudent } from '@prisma/client';

export class GymStudentEntity implements GymStudent {
  id: number;
  email: string;
  name: string;
  updateAt: Date;
  createdAt: Date;
}
