import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Transactions } from 'database/entities/transaction.entity';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Repository } from 'typeorm';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transactions)
    private transactionRepository: Repository<Transactions>,
  ) {}

  create(createTransactionDto: CreateTransactionDto) {
    const transaction = this.transactionRepository.create(createTransactionDto);

    if (createTransactionDto.type === 'consumable') {
      transaction.amount = 0 - transaction.amount;
    }

    return this.transactionRepository.save(transaction);
  }

  async findAll(
    page: number,
    limit: number,
  ): Promise<Pagination<Transactions>> {
    const [transactions, total] = await this.transactionRepository.findAndCount(
      {
        skip: limit * (page - 1),
        take: limit,
      },
    );

    return {
      items: transactions,
      links: {
        previous:
          page > 1 ? `/transactions?page=${page - 1}&limit=${limit}` : null,
        next:
          total > page * limit
            ? `/transactions?page=${page + 1}&limit=${limit}`
            : null,
      },
      meta: {
        currentPage: page,
        itemCount: transactions.length,
        itemsPerPage: limit,
        totalItems: total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findOne(id: number) {
    const transaction = await this.transactionRepository.findOneBy({
      id: id,
    });

    if (!transaction) {
      throw new NotFoundException(`Transaction with ID ${id} not found`);
    }

    return transaction;
  }

  async remove(id: number) {
    const result = await this.transactionRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Transaction with ID ${id} not found`);
    }
  }

  async getAmountByCategory(
    categoryId: number,
    fromPeriod: Date,
    toPeriod: Date,
  ) {
    const transactions = await this.transactionRepository
      .createQueryBuilder('Transactions')
      .where('category_id = :categoryId', { categoryId })
      .andWhere('Transactions.createdAt BETWEEN :fromPeriod AND :toPeriod', {
        fromPeriod,
        toPeriod,
      })
      .getMany();

    if (transactions.length === 0) {
      throw new NotFoundException('This category haven`t transactions');
    }

    return transactions.reduce((a, b) => a + b.amount, 0);
  }
}
