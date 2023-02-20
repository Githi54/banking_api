export class CreateTransactionDto {
  readonly amount: number;
  readonly type: 'profitable' | 'consumable';
  readonly bank_id: number;
}
