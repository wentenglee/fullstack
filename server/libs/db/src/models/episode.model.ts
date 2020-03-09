import { prop, modelOptions } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class Episode {
  //@ApiProperty({ description: '课程名称', example: 'courseName' })
  @prop()
  username: string

  //@ApiProperty({ description: '封面图', example: 'coverPicture' })
  @prop()
  file: string

}