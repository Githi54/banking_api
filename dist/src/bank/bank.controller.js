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
exports.BankController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const bank_entity_1 = require("../../database/entities/bank.entity");
const bank_service_1 = require("./bank.service");
const create_bank_dto_1 = require("./dto/create-bank.dto");
const update_bank_dto_1 = require("./dto/update-bank.dto");
let BankController = class BankController {
    constructor(bankService) {
        this.bankService = bankService;
    }
    async create(createBankDto) {
        return await this.bankService.create(createBankDto);
    }
    async findAll() {
        return await this.bankService.findAll();
    }
    async findOne(id) {
        return await this.bankService.findOne(+id);
    }
    async update(id, updateBankDto) {
        return await this.bankService.update(+id, updateBankDto);
    }
    async remove(id) {
        return await this.bankService.remove(+id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create bank' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: bank_entity_1.Bank }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bank_dto_1.CreateBankDto]),
    __metadata("design:returntype", Promise)
], BankController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all banks' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [bank_entity_1.Bank] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BankController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get bank by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: bank_entity_1.Bank }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BankController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update bank by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: bank_entity_1.Bank }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_bank_dto_1.UpdateBankDto]),
    __metadata("design:returntype", Promise)
], BankController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete bank by id' }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BankController.prototype, "remove", null);
BankController = __decorate([
    (0, swagger_1.ApiTags)('Banks'),
    (0, common_1.Controller)('bank'),
    __metadata("design:paramtypes", [bank_service_1.BankService])
], BankController);
exports.BankController = BankController;
//# sourceMappingURL=bank.controller.js.map