import { ApiProperty } from '@nestjs/swagger';

export class CreateBankDto {
  @ApiProperty({ example: 1, description: 'Unique identificator' })
  readonly name: string;

  @ApiProperty({ example: 500, description: 'Balance by bank' })
  readonly balance: number;
}
