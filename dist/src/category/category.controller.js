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
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const category_entity_1 = require("../../database/entities/category.entity");
const transactions_service_1 = require("../transactions/transactions.service");
const category_service_1 = require("./category.service");
const create_category_dto_1 = require("./dto/create-category.dto");
const update_category_dto_1 = require("./dto/update-category.dto");
let CategoryController = class CategoryController {
    constructor(categoryService, transactionsService) {
        this.categoryService = categoryService;
        this.transactionsService = transactionsService;
    }
    async create(createCategoryDto) {
        return await this.categoryService.create(createCategoryDto);
    }
    async getStatistic(categoryIds, fromPeriod, toPeriod) {
        const categories = await (await this.categoryService.findAll()).filter((category) => categoryIds.includes(`${category.id}`));
        const data = await Promise.all(categories.map(async (category) => {
            const result = {};
            const transactionsSum = await this.transactionsService.getAmountByCategory(category.id, fromPeriod, toPeriod);
            result[category.name] = transactionsSum;
            return result;
        }));
        return data;
    }
    findAll() {
        return this.categoryService.findAll();
    }
    findOne(id) {
        return this.categoryService.findOne(+id);
    }
    update(id, updateCategoryDto) {
        return this.categoryService.update(+id, updateCategoryDto);
    }
    remove(id) {
        return this.categoryService.remove(+id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create new category' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: category_entity_1.Category }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_category_dto_1.CreateCategoryDto]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get statistic' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [Object] }),
    (0, common_1.Get)('statistics'),
    __param(0, (0, common_1.Query)('categoryIds')),
    __param(1, (0, common_1.Query)('fromPeriod')),
    __param(2, (0, common_1.Query)('toPeriod')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Date,
        Date]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getStatistic", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all categories' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [category_entity_1.Category] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get category by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: category_entity_1.Category }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update category by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: category_entity_1.Category }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_category_dto_1.UpdateCategoryDto]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete category by id' }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "remove", null);
CategoryController = __decorate([
    (0, swagger_1.ApiTags)('Categories'),
    (0, common_1.Controller)('category'),
    __metadata("design:paramtypes", [category_service_1.CategoryService,
        transactions_service_1.TransactionsService])
], CategoryController);
exports.CategoryController = CategoryController;
//# sourceMappingURL=category.controller.js.map