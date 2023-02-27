"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migration1676759301218 = void 0;
class migration1676759301218 {
    async up(queryRunner) {
        await queryRunner.query('created categorys');
    }
    async down(queryRunner) {
        await queryRunner.query('created categorys');
    }
}
exports.migration1676759301218 = migration1676759301218;
//# sourceMappingURL=1676759301218-migration.js.map