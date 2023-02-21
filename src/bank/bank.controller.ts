import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Bank } from 'database/entities/bank.entity';
import { BankService } from './bank.service';
import { CreateBankDto } from './dto/create-bank.dto';
import { UpdateBankDto } from './dto/update-bank.dto';

@Controller('bank')
export class BankController {
  constructor(private readonly bankService: BankService) {}

  @ApiOperation({ summary: 'Create bank' })
  @ApiResponse({ status: 200, type: Bank })
  @Post()
  async create(@Body() createBankDto: CreateBankDto) {
    return await this.bankService.create(createBankDto);
  }

  @ApiOperation({ summary: 'Get all banks' })
  @ApiResponse({ status: 200, type: [Bank] })
  @Get()
  async findAll() {
    return await this.bankService.findAll();
  }

  @ApiOperation({ summary: 'Get bank by id' })
  @ApiResponse({ status: 200, type: Bank })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.bankService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update bank by id' })
  @ApiResponse({ status: 200, type: Bank })
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateBankDto: UpdateBankDto) {
    return await this.bankService.update(+id, updateBankDto);
  }

  @ApiOperation({ summary: 'Delete bank by id' })
  @ApiResponse({ status: 200 })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.bankService.remove(+id);
  }
}
