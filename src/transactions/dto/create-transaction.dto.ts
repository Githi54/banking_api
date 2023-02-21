import { ApiProperty } from '@nestjs/swagger';

export class CreateTransactionDto {
  @ApiProperty({ example: 12342, description: 'Transaction amount' })
  readonly amount: number;

  @ApiProperty({ example: 'consumable', description: 'Transaction type' })
  readonly type: 'profitable' | 'consumable';

  @ApiProperty({
    example: 1,
    description: 'Bank Id which have this transaction',
  })
  readonly bank_id: number;
  @ApiProperty({
    example: 1,
    description: 'Category Id which have this transaction',
  })
  readonly category_id: number;

  @ApiProperty({
    example: '2023-01-01',
    description: 'Transaction created date',
  })
  readonly createdAt: Date;
}
