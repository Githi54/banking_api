import { Transactions } from 'database/entities/transaction.entity';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Repository } from 'typeorm';
import { CreateTransactionDto } from './dto/create-transaction.dto';
export declare class TransactionsService {
    private transactionRepository;
    constructor(transactionRepository: Repository<Transactions>);
    create(createTransactionDto: CreateTransactionDto): Promise<Transactions>;
    findAll(page: number, limit: number): Promise<Pagination<Transactions>>;
    findOne(id: number): Promise<Transactions>;
    remove(id: number): Promise<void>;
    getAmountByCategory(categoryId: number, fromPeriod: Date, toPeriod: Date): Promise<number>;
}
