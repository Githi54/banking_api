import { ApiProperty } from '@nestjs/swagger';

export class TransactionsSchema {
  @ApiProperty()
  id: number;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  type: 'profitable' | 'consumable';

  @ApiProperty()
  bank_id: number;

  @ApiProperty()
  category_id: number;

  @ApiProperty()
  createdAt: Date;
}
