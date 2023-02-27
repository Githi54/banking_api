import { Category } from 'database/entities/category.entity';
import { TransactionsService } from 'src/transactions/transactions.service';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoryController {
    private readonly categoryService;
    private readonly transactionsService;
    constructor(categoryService: CategoryService, transactionsService: TransactionsService);
    create(createCategoryDto: CreateCategoryDto): Promise<Category>;
    getStatistic(categoryIds: string, fromPeriod: Date, toPeriod: Date): Promise<{}[]>;
    findAll(): Promise<Category[]>;
    findOne(id: string): Promise<Category>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<Category>;
    remove(id: string): Promise<void>;
}
