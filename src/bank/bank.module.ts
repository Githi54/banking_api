import { Module } from '@nestjs/common';
import { BankService } from './bank.service';
import { BankController } from './bank.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bank } from '../../database/entities/bank.entity';

@Module({
  controllers: [BankController],
  providers: [BankService],
  imports: [TypeOrmModule.forFeature([Bank])],
})
export class BankModule {}
