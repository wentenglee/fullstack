import { prop, modelOptions } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'

@modelOptions({
  schemaOptions:{
    timestamps:true
  }
})
export class User {
  @ApiProperty({description:'用戶名',example:'user1'})
  @prop()
  username: string

  @ApiProperty({description:'密碼',example:'pass1'})
  @prop()
  password: string

}