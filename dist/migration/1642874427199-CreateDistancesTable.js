"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDistancesTable1642874427199 = void 0;
const index_1 = require("typeorm/index");
class CreateDistancesTable1642874427199 {
    async up(queryRunner) {
        await queryRunner.createTable(new index_1.Table({
            name: 'distance',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'value',
                    type: 'int',
                    isNullable: false,
                    default: 0,
                },
            ]
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable('distance');
    }
}
exports.CreateDistancesTable1642874427199 = CreateDistancesTable1642874427199;
//# sourceMappingURL=1642874427199-CreateDistancesTable.js.map