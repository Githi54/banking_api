import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transactions } from 'database/entities/transaction.entity';
import { Bank } from 'database/entities/bank.entity';
import { BankService } from 'src/bank/bank.service';

@Module({
  controllers: [TransactionsController],
  providers: [TransactionsService, BankService],
  imports: [TypeOrmModule.forFeature([Transactions, Bank])],
})
export class TransactionsModule {}
