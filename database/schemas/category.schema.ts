import { ApiProperty } from '@nestjs/swagger';

export class CategorySchema {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}
