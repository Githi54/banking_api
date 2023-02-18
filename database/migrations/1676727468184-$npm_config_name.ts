import { MigrationInterface, QueryRunner } from 'typeorm';

export class $npmConfigName1676727468184 implements MigrationInterface {
  name = '$npmConfigName1676727468184';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "Bank" ("id" SERIAL NOT NULL, "name" character varying NOT NULL DEFAULT '', "balance" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_0e84d0d13aa99a83fe04f312dca" UNIQUE ("name"), CONSTRAINT "PK_72ed0cf67a18c609a7ce686d5bf" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "Bank"`);
  }
}
