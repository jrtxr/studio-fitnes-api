import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GymStudentService } from './gym-student.service';
import { CreateGymStudentDto } from './dto/create-gym-student.dto';
import { UpdateGymStudentDto } from './dto/update-gym-student.dto';

@Controller('gym-student')
export class GymStudentController {
  constructor(private readonly gymStudentService: GymStudentService) {}

  @Post()
  create(@Body() createGymStudentDto: CreateGymStudentDto) {
    return this.gymStudentService.create(createGymStudentDto);
  }

  @Get()
  findAll() {
    return this.gymStudentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gymStudentService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGymStudentDto: UpdateGymStudentDto,
  ) {
    return this.gymStudentService.update(+id, updateGymStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gymStudentService.remove(+id);
  }
}
