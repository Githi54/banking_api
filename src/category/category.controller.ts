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
import { TransactionsService } from 'src/transactions/transactions.service';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('category')
export class CategoryController {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly transactionsService: TransactionsService,
  ) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

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

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.update(+id, updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }
}
