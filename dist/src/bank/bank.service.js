"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bank_entity_1 = require("../../database/entities/bank.entity");
let BankService = class BankService {
    constructor(bankRepository) {
        this.bankRepository = bankRepository;
    }
    async findAll() {
        return await this.bankRepository.find();
    }
    async findOne(id) {
        const bank = await this.bankRepository.findOneBy({
            id: id,
        });
        if (!bank) {
            throw new common_1.NotFoundException(`Bank with ID ${id} not found`);
        }
        return bank;
    }
    async create(createBankDto) {
        const bank = this.bankRepository.create(createBankDto);
        return this.bankRepository.save(bank);
    }
    async remove(id) {
        const result = await this.bankRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Bank with ID ${id} not found`);
        }
    }
    async update(id, updateBankDto) {
        await this.bankRepository.update(id, updateBankDto);
        return this.bankRepository.findOneBy({
            id: id,
        });
    }
};
BankService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bank_entity_1.Bank)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BankService);
exports.BankService = BankService;
//# sourceMappingURL=bank.service.js.map