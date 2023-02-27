"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migration1676732705039 = void 0;
class migration1676732705039 {
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "bank" RENAME COLUMN "title" TO "name"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "post" RENAME COLUMN "name" TO "title"`);
    }
}
exports.migration1676732705039 = migration1676732705039;
//# sourceMappingURL=1676732705039-migration.js.map