import { Bank } from 'database/entities/bank.entity';
import { BankService } from './bank.service';
import { CreateBankDto } from './dto/create-bank.dto';
import { UpdateBankDto } from './dto/update-bank.dto';
export declare class BankController {
    private readonly bankService;
    constructor(bankService: BankService);
    create(createBankDto: CreateBankDto): Promise<Bank>;
    findAll(): Promise<Bank[]>;
    findOne(id: string): Promise<Bank>;
    update(id: string, updateBankDto: UpdateBankDto): Promise<Bank>;
    remove(id: string): Promise<void>;
}
