import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { GymStudentModule } from './gym-student/gym-student.module';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, GymStudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
