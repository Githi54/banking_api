import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { Bank } from './database/entities/bank.entity';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: configService.get(process.env.POSTGRES_HOST),
  port: configService.get(process.env.POSTGRES_PORT),
  username: configService.get(process.env.POSTGRES_USER),
  password: configService.get(process.env.POSTGRES_PASSWORD),
  database: configService.get(process.env.POSTGRES_DB),
  entities: [Bank],
});
