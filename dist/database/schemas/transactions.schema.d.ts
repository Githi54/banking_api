export declare class TransactionsSchema {
    id: number;
    amount: number;
    type: 'profitable' | 'consumable';
    bank_id: number;
    category_id: number;
    createdAt: Date;
}
