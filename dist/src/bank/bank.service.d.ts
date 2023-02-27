import { Repository } from 'typeorm';
import { Bank } from '../../database/entities/bank.entity';
import { CreateBankDto } from './dto/create-bank.dto';
import { UpdateBankDto } from './dto/update-bank.dto';
export declare class BankService {
    private bankRepository;
    constructor(bankRepository: Repository<Bank>);
    findAll(): Promise<Bank[]>;
    findOne(id: number): Promise<Bank>;
    create(createBankDto: CreateBankDto): Promise<Bank>;
    remove(id: number): Promise<void>;
    update(id: number, updateBankDto: UpdateBankDto): Promise<Bank>;
}
