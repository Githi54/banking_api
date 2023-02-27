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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transactions = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let Transactions = class Transactions {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Unique identificator' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Transactions.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 162563, description: 'Transaction amount' }),
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], Transactions.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'profitable', description: 'Type of transaction' }),
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Transactions.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'Unique identificator by bank which have this transaction',
    }),
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], Transactions.prototype, "bank_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'Unique identificator by category which have this transaction',
    }),
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], Transactions.prototype, "category_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', select: false }),
    __metadata("design:type", Date)
], Transactions.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', select: false }),
    __metadata("design:type", Date)
], Transactions.prototype, "updatedAt", void 0);
Transactions = __decorate([
    (0, typeorm_1.Entity)({ name: 'Transactions' })
], Transactions);
exports.Transactions = Transactions;
//# sourceMappingURL=transaction.entity.js.map