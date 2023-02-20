export class CreateTransactionDto {
  readonly amount: number;
  readonly type: 'profitable' | 'consumable';
  readonly bank_id: number;
  readonly category_id: number;
  readonly createdAt: Date;
}
