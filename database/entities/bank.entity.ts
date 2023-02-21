import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'Bank' })
export class Bank {
  @ApiProperty({ example: 1, description: 'Unique identificator' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Mono bank', description: 'Bank name' })
  @Column({ nullable: false, default: '', unique: true })
  name: string;

  @ApiProperty({ example: 175, description: 'Unique identificator' })
  @Column({ default: 0, nullable: false })
  balance: number;

  @CreateDateColumn({ type: 'timestamp', select: false })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', select: false })
  updatedAt: Date;
}
