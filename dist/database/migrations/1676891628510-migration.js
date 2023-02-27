"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migration1676891628510 = void 0;
class migration1676891628510 {
    constructor() {
        this.name = 'migration1676891628510';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "Bank" ("id" SERIAL NOT NULL, "name" character varying NOT NULL DEFAULT '', "balance" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_0e84d0d13aa99a83fe04f312dca" UNIQUE ("name"), CONSTRAINT "PK_72ed0cf67a18c609a7ce686d5bf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL DEFAULT '', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "Bank"`);
    }
}
exports.migration1676891628510 = migration1676891628510;
//# sourceMappingURL=1676891628510-migration.js.map