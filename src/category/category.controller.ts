import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Category } from 'database/entities/category.entity';
import { TransactionsService } from 'src/transactions/transactions.service';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@ApiTags('Categories')
@Controller('category')
export class CategoryController {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly transactionsService: TransactionsService,
  ) {}

  @ApiOperation({ summary: 'Create new category' })
  @ApiResponse({ status: 200, type: Category })
  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    return await this.categoryService.create(createCategoryDto);
  }

  @ApiOperation({ summary: 'Get statistic' })
  @ApiResponse({ status: 200, type: [Object] })
  @Get('statistics')
  async getStatistic(
    @Query('categoryIds') categoryIds: string,
    @Query('fromPeriod') fromPeriod: Date,
    @Query('toPeriod') toPeriod: Date,
  ) {
    const categories = await (
      await this.categoryService.findAll()
    ).filter((category) => categoryIds.includes(`${category.id}`));
    const data = await Promise.all(
      categories.map(async (category) => {
        const result = {};
        const transactionsSum =
          await this.transactionsService.getAmountByCategory(
            category.id,
            fromPeriod,
            toPeriod,
          );

        result[category.name] = transactionsSum;

        return result;
      }),
    );

    return data;
  }

  @ApiOperation({ summary: 'Get all categories' })
  @ApiResponse({ status: 200, type: [Category] })
  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @ApiOperation({ summary: 'Get category by id' })
  @ApiResponse({ status: 200, type: Category })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update category by id' })
  @ApiResponse({ status: 200, type: Category })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.update(+id, updateCategoryDto);
  }

  @ApiOperation({ summary: 'Delete category by id' })
  @ApiResponse({ status: 200 })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }
}
