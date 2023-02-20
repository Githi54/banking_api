export class CreateTransactionDto {
  readonly amount: number;
  readonly type: 'profitable' | 'consumable';
}
