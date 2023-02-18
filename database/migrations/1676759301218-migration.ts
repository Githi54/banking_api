import { MigrationInterface, QueryRunner } from 'typeorm';

export class migration1676759301218 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('created categorys');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('created categorys');
  }
}
