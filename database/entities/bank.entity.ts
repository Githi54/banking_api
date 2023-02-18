import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'Bank' })
export class Bank {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, default: '', unique: true })
  name: string;

  @Column({ default: 0, nullable: false })
  balance: number;

  @CreateDateColumn({ type: 'timestamp', select: false })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', select: false })
  updatedAt: Date;
}
