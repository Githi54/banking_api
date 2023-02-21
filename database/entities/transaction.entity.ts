import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'Transactions' })
export class Transactions {
  @ApiProperty({ example: 1, description: 'Unique identificator' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 162563, description: 'Transaction amount' })
  @Column({ nullable: false })
  amount: number;

  @ApiProperty({ example: 'profitable', description: 'Type of transaction' })
  @Column({ nullable: false })
  type: 'profitable' | 'consumable';

  @ApiProperty({
    example: 1,
    description: 'Unique identificator by bank which have this transaction',
  })
  @Column({ nullable: false })
  bank_id: number;

  @ApiProperty({
    example: 1,
    description: 'Unique identificator by category which have this transaction',
  })
  @Column({ nullable: false })
  category_id: number;

  @CreateDateColumn({ type: 'timestamp', select: false })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', select: false })
  updatedAt: Date;
}
