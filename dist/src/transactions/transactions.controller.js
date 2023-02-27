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
exports.TransactionsController = void 0;
const common_1 = require("@nestjs/common");
const transactions_service_1 = require("./transactions.service");
const create_transaction_dto_1 = require("./dto/create-transaction.dto");
const bank_service_1 = require("../bank/bank.service");
const transaction_entity_1 = require("../../database/entities/transaction.entity");
const swagger_1 = require("@nestjs/swagger");
let TransactionsController = class TransactionsController {
    constructor(transactionsService, bankService) {
        this.transactionsService = transactionsService;
        this.bankService = bankService;
    }
    async create(createTransactionDto) {
        const transaction = await this.transactionsService.create(createTransactionDto);
        const bank = await this.bankService.findOne(createTransactionDto.bank_id);
        const balance = createTransactionDto.type === 'profitable'
            ? bank.balance + createTransactionDto.amount
            : bank.balance - createTransactionDto.amount;
        await this.bankService.update(createTransactionDto.bank_id, {
            balance: balance,
        });
        return transaction;
    }
    async findAll(page = 1, limit = 10) {
        return this.transactionsService.findAll(page, limit);
    }
    async findOne(id) {
        return await this.transactionsService.findOne(+id);
    }
    remove(id) {
        return this.transactionsService.remove(+id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create new transaction' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: transaction_entity_1.Transactions }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_transaction_dto_1.CreateTransactionDto]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all transactions' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [transaction_entity_1.Transactions] }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get transaction by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: transaction_entity_1.Transactions }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete transaction by id' }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TransactionsController.prototype, "remove", null);
TransactionsController = __decorate([
    (0, swagger_1.ApiTags)('Transactions'),
    (0, common_1.Controller)('transactions'),
    __metadata("design:paramtypes", [transactions_service_1.TransactionsService,
        bank_service_1.BankService])
], TransactionsController);
exports.TransactionsController = TransactionsController;
//# sourceMappingURL=transactions.controller.js.map