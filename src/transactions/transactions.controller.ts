import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { BankService } from 'src/bank/bank.service';
import { Transactions } from 'database/entities/transaction.entity';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('transactions')
export class TransactionsController {
  constructor(
    private readonly transactionsService: TransactionsService,
    private readonly bankService: BankService,
  ) {}

  @ApiOperation({ summary: 'Create new transaction' })
  @ApiResponse({ status: 200, type: Transactions })
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

  @ApiOperation({ summary: 'Get all transactions' })
  @ApiResponse({ status: 200, type: [Transactions] })
  @Get()
  async findAll(
    @Query('page', ParseIntPipe) page = 1,
    @Query('limit', ParseIntPipe) limit = 10,
  ) {
    return this.transactionsService.findAll(page, limit);
  }

  @ApiOperation({ summary: 'Get transaction by id' })
  @ApiResponse({ status: 200, type: Transactions })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.transactionsService.findOne(+id);
  }

  @ApiOperation({ summary: 'Delete transaction by id' })
  @ApiResponse({ status: 200 })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transactionsService.remove(+id);
  }
}
