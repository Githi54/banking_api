import { MigrationInterface, QueryRunner } from 'typeorm';

export class migration1676732705039 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "bank" RENAME COLUMN "title" TO "name"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "post" RENAME COLUMN "name" TO "title"`,
    );
  }
}
