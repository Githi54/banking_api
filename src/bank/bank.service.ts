import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Bank } from '../../database/entities/bank.entity';

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

  async create(bankData: Partial<Bank>): Promise<Bank> {
    const bank = this.bankRepository.create(bankData);
    return this.bankRepository.save(bank);
  }

  async remove(id: number): Promise<void> {
    const result = await this.bankRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Bank with ID ${id} not found`);
    }
  }

  async update(id: number, updateData: Partial<Bank>): Promise<Bank> {
    await this.bankRepository.update(id, updateData);
    return this.bankRepository.findOneBy({
      id: id,
    });
  }
}
