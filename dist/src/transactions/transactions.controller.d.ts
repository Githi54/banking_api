import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { BankService } from 'src/bank/bank.service';
import { Transactions } from 'database/entities/transaction.entity';
export declare class TransactionsController {
    private readonly transactionsService;
    private readonly bankService;
    constructor(transactionsService: TransactionsService, bankService: BankService);
    create(createTransactionDto: CreateTransactionDto): Promise<Transactions>;
    findAll(page?: number, limit?: number): Promise<import("nestjs-typeorm-paginate").Pagination<Transactions, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    findOne(id: string): Promise<Transactions>;
    remove(id: string): Promise<void>;
}
