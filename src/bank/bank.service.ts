import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Bank } from '../../database/entities/bank.entity';
import { CreateBankDto } from './dto/create-bank.dto';
import { UpdateBankDto } from './dto/update-bank.dto';

@Injectable()
export class BankService {
  constructor(
    @InjectRepository(Bank)
    private bankRepository: Repository<Bank>,
  ) {}

  async findAll(): Promise<Bank[]> {
    return await this.bankRepository.find();
  }

  async findOne(id: number): Promise<Bank> {
    const bank = await this.bankRepository.findOneBy({
      id: id,
    });

    if (!bank) {
      throw new NotFoundException(`Bank with ID ${id} not found`);
    }
    return bank;
  }

  async create(createBankDto: CreateBankDto): Promise<Bank> {
    const bank = this.bankRepository.create(createBankDto);
    return this.bankRepository.save(bank);
  }

  async remove(id: number): Promise<void> {
    const result = await this.bankRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Bank with ID ${id} not found`);
    }
  }

  async update(id: number, updateBankDto: UpdateBankDto) {
    await this.bankRepository.update(id, updateBankDto);
    return this.bankRepository.findOneBy({
      id: id,
    });
  }
}
