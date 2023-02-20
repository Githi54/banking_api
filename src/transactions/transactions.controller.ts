import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { BankService } from 'src/bank/bank.service';

@Controller('transactions')
export class TransactionsController {
  constructor(
    private readonly transactionsService: TransactionsService,
    private readonly bankService: BankService,
  ) {}

  @Post()
  async create(@Body() createTransactionDto: CreateTransactionDto) {
    const transaction = await this.transactionsService.create(
      createTransactionDto,
    );
    const bank = await this.bankService.findOne(createTransactionDto.bank_id);

    const balance =
      createTransactionDto.type === 'profitable'
        ? bank.balance + createTransactionDto.amount
        : bank.balance - createTransactionDto.amount;

    await this.bankService.update(createTransactionDto.bank_id, {
      balance: balance,
    });

    return transaction;
  }

  @Get()
  findAll() {
    return this.transactionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transactionsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transactionsService.remove(+id);
  }
}
