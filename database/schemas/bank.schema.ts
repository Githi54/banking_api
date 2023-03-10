import { ApiProperty } from '@nestjs/swagger';

export class BankSchema {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  balance: number;
}
