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
exports.TransactionsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const transaction_entity_1 = require("../../database/entities/transaction.entity");
const typeorm_2 = require("typeorm");
let TransactionsService = class TransactionsService {
    constructor(transactionRepository) {
        this.transactionRepository = transactionRepository;
    }
    create(createTransactionDto) {
        const transaction = this.transactionRepository.create(createTransactionDto);
        if (createTransactionDto.type === 'consumable') {
            transaction.amount = 0 - transaction.amount;
        }
        return this.transactionRepository.save(transaction);
    }
    async findAll(page, limit) {
        const [transactions, total] = await this.transactionRepository.findAndCount({
            skip: limit * (page - 1),
            take: limit,
        });
        return {
            items: transactions,
            links: {
                previous: page > 1 ? `/transactions?page=${page - 1}&limit=${limit}` : null,
                next: total > page * limit
                    ? `/transactions?page=${page + 1}&limit=${limit}`
                    : null,
            },
            meta: {
                currentPage: page,
                itemCount: transactions.length,
                itemsPerPage: limit,
                totalItems: total,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    async findOne(id) {
        const transaction = await this.transactionRepository.findOneBy({
            id: id,
        });
        if (!transaction) {
            throw new common_1.NotFoundException(`Transaction with ID ${id} not found`);
        }
        return transaction;
    }
    async remove(id) {
        const result = await this.transactionRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Transaction with ID ${id} not found`);
        }
    }
    async getAmountByCategory(categoryId, fromPeriod, toPeriod) {
        const transactions = await this.transactionRepository
            .createQueryBuilder('Transactions')
            .where('category_id = :categoryId', { categoryId })
            .andWhere('Transactions.createdAt BETWEEN :fromPeriod AND :toPeriod', {
            fromPeriod,
            toPeriod,
        })
            .getMany();
        if (transactions.length === 0) {
            throw new common_1.NotFoundException('This category haven`t transactions');
        }
        return transactions.reduce((a, b) => a + b.amount, 0);
    }
};
TransactionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(transaction_entity_1.Transactions)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TransactionsService);
exports.TransactionsService = TransactionsService;
//# sourceMappingURL=transactions.service.js.map