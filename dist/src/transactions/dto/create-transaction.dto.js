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
exports.CreateTransactionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateTransactionDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 12342, description: 'Transaction amount' }),
    __metadata("design:type", Number)
], CreateTransactionDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'consumable', description: 'Transaction type' }),
    __metadata("design:type", String)
], CreateTransactionDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'Bank Id which have this transaction',
    }),
    __metadata("design:type", Number)
], CreateTransactionDto.prototype, "bank_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'Category Id which have this transaction',
    }),
    __metadata("design:type", Number)
], CreateTransactionDto.prototype, "category_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2023-01-01',
        description: 'Transaction created date',
    }),
    __metadata("design:type", Date)
], CreateTransactionDto.prototype, "createdAt", void 0);
exports.CreateTransactionDto = CreateTransactionDto;
//# sourceMappingURL=create-transaction.dto.js.map