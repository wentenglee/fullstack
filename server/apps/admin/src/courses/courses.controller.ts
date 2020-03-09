import { InjectModel } from 'nestjs-typegoose';
import { Controller, Inject } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { Course } from 'libs/db/models/course.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiTags } from '@nestjs/swagger';


@Crud({
  model: Course
})

@Controller('courses')
@ApiTags('课程')
export class CoursesController {
  constructor(
    @InjectModel(Course) private model: ReturnModelType<typeof Course>
  ) {

  }
}
