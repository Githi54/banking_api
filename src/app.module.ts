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
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: `${process.env.POSTGRES_PASSWORD}`,
      database: process.env.POSRGRES_DB,
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
