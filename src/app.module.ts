import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankModule } from './bank/bank.module';
import { Bank } from '../database/entities/bank.entity';
import { CategoryModule } from './category/category.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'BAscjbaiu23e4',
      database: 'banking-api',
      entities: [Bank],
      autoLoadEntities: true,
      synchronize: true,
    }),
    BankModule,
    CategoryModule,
    TransactionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
