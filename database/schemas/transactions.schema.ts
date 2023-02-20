import { ApiProperty } from '@nestjs/swagger';

export class TransactionsSchema {
  @ApiProperty()
  id: number;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  type: 'profitable' | 'consumable';
}
