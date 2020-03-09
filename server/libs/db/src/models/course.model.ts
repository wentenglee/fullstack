import { prop, modelOptions, arrayProp, Ref } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'
import { Episode } from './episode.model'

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class Course {
  @ApiProperty({ description: '课程名称', example: 'courseName' })
  @prop()
  username: string

  @ApiProperty({ description: '封面图', example: 'coverPicture' })
  @prop()
  cover: string

  @arrayProp({ itemsRef: 'Episode' })
  episodes: Ref<Episode>[]

}