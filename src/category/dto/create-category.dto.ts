import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({ example: 'Eat', description: 'Category name' })
  readonly name: string;
}
